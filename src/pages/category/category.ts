import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, LoadingController, AlertController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  pageReady: boolean = false;
  category: any = '';
  articles: any[] = [];
  goods: any;
  pageNo: number = 1;
  errorMessage: any;

  constructor( 
    public navParams: NavParams,
    public http: Http,
    private loader: LoadingController,
    private alerter: AlertController,
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) {  }

  ionViewDidLoad() {
    let loading = this.loader.create({
      content: 'Please wait...'
    });
    loading.present();
    let info = this.navParams.get('pageInfo');
    this.category = {
      title: info.category_name,
      slug: info.slug
    }
    console.log(info);
    this.getTheGoods(this.pageNo, this.category.slug).then((data) => {
      this.articles = data;
      loading.dismiss();
    }, (err) => {
      let alert = this.alerter.create({
        title: 'Oops!',
        message: 'Failed to load articles. Sorry about that. Are you sure your phone is connected to the internet?',
        buttons: ['let me check']
      });
      alert.present();
    });
  }

  //BUUUUUZZ LIGHT YEAR
  toInfinityAndBeyond(infiniteScroll){
    setTimeout(() => {
      this.pageNo = this.pageNo+1;
      this.getMoreGoods(this.pageNo, this.category.slug),
      error => this.errorMessage = <any> error;

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }

  getTheGoods(pageNo: number, category){
    console.log('page number '+ pageNo +' '+'term: '+category);

    if(this.goods){
      return Promise.resolve(this.goods);
    }

    return new Promise(resolve => {
      this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page='+pageNo+'&filter[category_name]='+category).map(res => res.json()).subscribe((data) => {
        this.goods = data;
        console.log('the goods: ');
        console.log(this.goods);
        resolve(this.goods);
      });
    });
  }

  getMoreGoods(pageNo: number, category){
    this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page='+pageNo+'&filter[category_name]='+category).map(res => res.json()).subscribe(data =>{
      for(let i = 0; i<data.length; i++){
        this.articles.push(data[i]);
      }
    }, (err) => {
      let alert = this.alerter.create({
        title: 'Oops!',
        message: 'Failed to fetch articles. Are you sure your phone is connected to the internet?',
        buttons: ['let me check']
      });
      alert.present();
    });
  }

  openArticle(article){
    let data = {
      entryData: article
    };

    let articleModal = this.modalCtrl.create('EntryPage', data);
    articleModal.present();
  }

  goHome(){
    this.navCtrl.setRoot('RsspagePage');
  }

}