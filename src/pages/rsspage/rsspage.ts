import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { EntryPage } from '../entry/entry';
import { Http } from '@angular/http';
import { AdsProvider } from '../../providers/ads/ads';

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
  pageReady: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    private http: Http, 
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private rss: RssFeedProvider,
    public adsProvider: AdsProvider
  ) { this.adsProvider.showAd(); }

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
      this.pageReady = true;
    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Oops!',
        message: 'Failed to fetch articles. Sorry about that.',
        buttons: ['let me check']
      });
      alert.present();
    });
    if(this.pageReady === true){
      loading.dismiss();
    }
    // console.log(this.news);
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
    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Oops!',
        message: 'Failed to fetch articles. Are you sure your phone is connected to the internet?',
        buttons: ['let me check']
      });
      alert.present();
    });
  }

  goSearch(){
    let modal = this.modalCtrl.create('SearchPage');
    modal.onDidDismiss(data => {
      if(data.keyword === ""){
        console.log('Just closed the window, nothing to see here...');
      } else {
        this.navCtrl.push('SearchResultPage', data);
      }
    });
    modal.present();
  }

}