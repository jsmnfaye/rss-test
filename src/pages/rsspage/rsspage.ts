import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { EntryPage } from '../entry/entry';
import { Http } from '@angular/http';
import 'rxjs';

declare var RSSParser;

@Component({
  selector: 'page-rsspage',
  templateUrl: 'rsspage.html',
})
export class RsspagePage {

  targetUrl: string;
  bnEntries: Array<any> = [];
  headlineEntries: Array<any> = [];
  news: Array<any> = [];
  pageNo: number = 1;
  page: number;
  totalPages: number;
  errorMessage: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    private http: Http, 
    public loadCtrl: LoadingController
  ) {  }

  refreshMe(refresher){
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended.');
      refresher.complete();
    }, 3000);
  }
  
  ionViewDidLoad() {
    let loading = this.loadCtrl.create({
      content: "Fetching latest articles...",
      duration: 3000
    });

    loading.present();
    console.clear();
    console.log('Hello, beautiful people of the Philippines!');

    this.getTheGoods(this.pageNo);
    console.log(this.news);
    loading.dismiss();
  }

  openEntry(entry){
    let data = {
      entryData: entry 
    }

    let modal = this.modalCtrl.create(EntryPage, data);
    modal.present();
  }

  getTheGoods(pageNo: number){
      this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page='+pageNo).map(res => res.json()).subscribe(allNews =>{
        console.log("total number of data: "+allNews.length);
        for(let i = 0; i<allNews.length; i++){
          this.news.push(allNews[i]);
        }
        allNews;
      });
    }
  
  toInfinityAndBeyond(infiniteScroll){
    setTimeout(() => {
      this.pageNo = this.pageNo + 1;
      console.clear();
      console.log(this.pageNo);
      this.getTheGoods(this.pageNo),
      error => this.errorMessage = <any> error;

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

}