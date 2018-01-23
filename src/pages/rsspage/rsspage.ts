import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AdsProvider } from '../../providers/ads/ads';

import { RssFeedProvider } from '../../providers/rss-feed/rss-feed';

@IonicPage()
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
      loading.dismiss();
    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Oops!',
        message: 'Failed to fetch articles. Sorry about that.',
        buttons: ['let me check']
      });
      alert.present();
    });
    // console.log(this.news);
    this.pageNo++;
  }

  openEntry(entry){
    let data = {
      entryData: entry 
    }

    let modal = this.modalCtrl.create('EntryPage', data);
    modal.present();
  }
  
  //BUUUUUZZ LIGHT YEAR
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
      // console.log("total number of data: "+allNews.length);
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
    this.adsProvider.hideAd();
    let searchprompt = this.alertCtrl.create({
      title: 'Search',
      message: 'Enter a keyword you would like to do a search on.',
      inputs: [
        {
          name: 'keyword',
          placeholder: 'What are you looking for?'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Oops, nevermind.');
            this.adsProvider.showAd();
          }
        },
        {
          text: 'Go',
          handler: data => {
            let searchModal = this.modalCtrl.create('SearchResultPage', { keyword: data.keyword });
            if(data.keyword == ""){
              let alert = this.alertCtrl.create({
                title: 'Whoa there',
                message: 'You didn\'t type in anything!',
                buttons: ['oops']
              });
              alert.present();
              this.adsProvider.showAd();
            } else {
              searchModal.present();
              this.adsProvider.showAd();
            }
          }
        }
      ]
    });
    searchprompt.present();
  }

}