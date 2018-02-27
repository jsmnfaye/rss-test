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

  pageNo: number = 1;
  headlines: any[] = [];
  headlineReady: boolean = false;
  featured: any[] = [];
  featuredReady: boolean = false;
  category: string = '';

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
  
  ionViewWillEnter() {
    let loading = this.loadCtrl.create({
      content: "Fetching latest articles...",
      duration: 3000
    });

    loading.present();
    console.log('Hello, beautiful people of the Philippines!');

    //get headlines
    this.rss.getTheGoods(this.pageNo, this.category).then(data => {
      data.forEach(element => {
        if(element.terms.category[0].name=='Featured'){
          this.featured.push(element);
        }
        else if(element.terms.category[0].name=='Headlines'){
          this.headlines.push(element);
        }
      });
      this.headlineReady = true;
    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Oops!',
        message: 'Failed to fetch articles. Sorry about that.',
        buttons: ['let me check']
      });
      alert.present();
    });

    if(this.headlineReady){
      loading.dismiss();
      console.log(this.featured);
      console.log(this.headlines);
    }
  }

  openEntry(entry){
    let data = {
      entryData: entry
    };

    this.navCtrl.push('EntryPage', data);
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