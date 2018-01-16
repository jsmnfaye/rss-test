import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';

import { EntryPage } from '../entry/entry';

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {

  keyword: any = '';
  pageReady: boolean = false;
  noResults: boolean = false;
  articles: any[] = [];
  goods: any;
  pageNo: number = 1;
  errorMessage: any;

  constructor( 
    public navParams: NavParams,
    public http: Http,
    private loader: LoadingController,
    private alerter: AlertController,
    private viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {  }

  ionViewDidLoad() {
    let loading = this.loader.create({
      content: 'Please wait...'
    });
    loading.present();
    this.keyword = this.navParams.get('keyword');
    console.log('You searched for: '+this.keyword);
    this.getTheGoods(this.pageNo, this.keyword).then((data) => {
      this.articles = data;
      loading.dismiss();
      if (this.articles.length == 0){
        this.noResults = true;
      }
    }, (err) => {
      let alert = this.alerter.create({
        title: 'Oops!',
        message: 'Failed to load articles. Sorry about that. Are you sure your phone is connected to the internet?',
        buttons: ['ok']
      });
      alert.present();
    });
  }

  //BUUUUUZZ LIGHT YEAR
  toInfinityAndBeyond(infiniteScroll){
    setTimeout(() => {
      this.pageNo = this.pageNo+1;
      this.getMoreGoods(this.pageNo, this.keyword),
      error => this.errorMessage = <any> error;

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }

  getTheGoods(pageNo: number, searchTerm){
    console.log('page number '+ pageNo +' '+'term: '+searchTerm);

    if(this.goods){
      return Promise.resolve(this.goods);
    }

    return new Promise(resolve => {
      this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page='+pageNo+'&filter[s]='+searchTerm).map(res => res.json()).subscribe((data) => {
        this.goods = data;
        console.log('the goods: ');
        console.log(this.goods);
        resolve(this.goods);
      });
    });
  }

  getMoreGoods(pageNo: number, searchTerm){
    this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page='+pageNo+'&filter[s]='+searchTerm).map(res => res.json()).subscribe(data =>{
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

    let articleModal = this.modalCtrl.create(EntryPage, data);
    articleModal.present();
  }

  goAway(){
    this.viewCtrl.dismiss();
  }

}
