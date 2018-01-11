import { Component } from '@angular/core';
import { IonicPage, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {

  keyword: any = '';
  pageReady: boolean = false;
  noResults: boolean = false;
  articles: any;

  constructor( 
    public navParams: NavParams,
    public http: Http,
    private loader: LoadingController,
    private alerter: AlertController
  ) {  }

  ionViewDidLoad() {
    let loading = this.loader.create({
      content: 'Please wait...'
    });
    loading.present();
    this.keyword = this.navParams.get('keyword');
    console.log('You searched for: '+this.keyword);
    this.getTheGoods(this.keyword).then((data) => {
      this.articles = data;
      loading.dismiss();
      if (this.articles.length == 0){
        this.noResults = true;
        // let alert = this.alerter.create({
        //   title: 'Whoops.',
        //   message: 'Your search term didn\'t return any results. Why not try searching for a different term?',
        //   buttons: ['ok']
        // });
        // alert.present();
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

  getTheGoods(searchTerm){
    // this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?filter[s]='+searchTerm).map(res => res.json()).subscribe(data =>{
    //   this.articles = data;
    //   // if(this.articles = )
    //   console.log(this.articles);
    //   this.pageReady = true;
    // });

    if(this.articles){
      return Promise.resolve(this.articles);
    }

    return new Promise(resolve => {
      this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?filter[s]='+searchTerm).map(res => res.json()).subscribe((data) => {
        this.articles = data;
        console.log(this.articles);
        resolve(this.articles);
      });
    });
  }

}
