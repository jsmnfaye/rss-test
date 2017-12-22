import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { EntryPage } from '../entry/entry';
import { Http } from '@angular/http';
import 'rxjs';

import { RssFeedProvider } from '../../providers/rss-feed/rss-feed';

declare var RSSParser;

@Component({
  selector: 'page-rsspage',
  templateUrl: 'rsspage.html',
})
export class RsspagePage {

  targetUrl: string;
  bnEntries: Array<any> = [];
  headlineEntries: Array<any> = [];
  news: any;
  pageNo = 1;
  category: string = '';
  totalPages: number;
  errorMessage: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    private http: Http, 
    public loadCtrl: LoadingController,
    private rss: RssFeedProvider
  ) {  }

  refreshMe(refresher){
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended.');
      refresher.complete();
    }, 2000);
  }
  
  ionViewDidLoad() {
    let loading = this.loadCtrl.create({
      content: "Fetching latest articles...",
      duration: 3000
    });

    loading.present();
    console.clear();
    console.log('Hello, beautiful people of the Philippines!');

    this.rss.getTheGoods(this.pageNo, this.category).then(data => {
      this.news = data;
    });
    console.log(this.news);
    loading.dismiss();
    this.pageNo++;
  }

  openEntry(entry){
    let data = {
      entryData: entry 
    }

    let modal = this.modalCtrl.create(EntryPage, data);
    modal.present();
  }
  
  toInfinityAndBeyond(infiniteScroll){
    setTimeout(() => {
      this.pageNo = this.pageNo+1;
      this.getTheGoods(this.pageNo, this.category),
      error => this.errorMessage = <any> error;

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }

  getTheGoods(pageNo: number, category: string){
    this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page='+pageNo+'&filter[category_name]='+category).map(res => res.json()).subscribe(allNews =>{
      console.log("total number of data: "+allNews.length);
      for(let i = 0; i<allNews.length; i++){
        this.news.push(allNews[i]);
      }
    });
  }

}