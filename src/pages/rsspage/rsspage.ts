import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';

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
  featuredImage: any;
  featuredImageReady: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private rss: RssFeedProvider,
    public adsProvider: AdsProvider
  ) { this.adsProvider.showAd(); }
  
  ionViewDidLoad() {
    console.log(Date());
    let loading = this.loadCtrl.create({
      content: "Fetching latest articles...",
      duration: 3000
    });
    loading.present();

    this.getFeaturedImage();

    if((this.featured.length<10)){
      for(let i = 0; i<10; i++){
        this.getArticles(this.pageNo);
      }
    }
  }

  getArticles(pageNo: number){
    this.rss.getTheGoods(pageNo, this.category).then(data => {
      data.forEach(element => {
        if(element.terms.category[0].slug=='featured'){
          this.featured.push(element);
        }
        else if(element.terms.category[0].slug=='headlines'){
          this.headlines.push(element);
        }
      });
    }, (err) => {
      console.log('Error getting articles');
    }); 
    console.log('Featured length: '+this.featured.length);
    this.pageNo++;
  }

  getFeaturedImage(){
    this.rss.getFeaturedImage().then(data => {
      this.featuredImage = data[0];
      this.featuredImageReady = true;
      console.log(this.featuredImageReady);
      console.log('Featured Image:');
      console.log(this.featuredImage);
    }, err => {
      console.log('Error fetching featured image');
    });
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