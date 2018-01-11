import { Component } from '@angular/core';
import { IonicPage, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {

  keyword: any = '';
  pageReady: boolean = false;
  articles: any;

  constructor( 
    public navParams: NavParams,
    public http: Http,
    private loader: LoadingController
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
        resolve(this.articles);
      });
    });
  }

}
