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

  today: any;
  date1: any;
  pageNo: number = 1;
  headlines: any[] = [];
  headlineReady: boolean = false;
  featured: any[] = [];
  breaking: any[] = [];
  category: string = '';
  featuredImage: any;
  imageReady: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private rss: RssFeedProvider,
    public adsProvider: AdsProvider
  ) { 
    this.today = new Date().toString().substr(4, 11);
    // this.adsProvider.showAd(); 
  }
  
  ionViewDidLoad() {
    let today = new Date();
    console.log(today);
    let loading = this.loadCtrl.create({
      content: "Fetching latest articles...",
      duration: 3000
    });
    loading.present();

    this.getFeaturedImage();

    for(let i = 0; i<30; i++){
      this.getArticles(this.pageNo);
    }
  }

  getArticles(pageNo: number){
    this.rss.getTheGoods(pageNo, this.category).then(data => {
      data.forEach(element => {
        if(element.terms.category[0].slug=='featured'){
          let entryDate = new Date(element.date).toString().substr(4, 11);
          if(this.featured.length<4){
            if(this.today == entryDate){
              this.featured.push(element);
            }
          }
        }
        else if(element.terms.category[0].slug=='headlines'){
          if(this.headlines.length<=0){
            let entryDate = new Date(element.date).toString().substr(4, 11);
            if(this.today == entryDate){
              this.headlines.push(element);
            }
          }
        }
        else if(element.terms.category[0].slug=='breaking-news'){
          if(this.breaking.length<=0){
            let entryDate = new Date(element.date).toString().substr(4, 11);
            if(this.today == entryDate){
              this.breaking.push(element);
            }
          }
        }
      });
    }, (err) => {
      console.log('Error getting articles');
    }); 
    // console.log('Featured length: '+this.featured.length);
    // console.log('Breaking length: '+this.breaking.length);
    // console.log('Headlines length: '+this.headlines.length);
    this.pageNo++;
  }

  getFeaturedImage(){
    console.log('featured image: '+this.featuredImage);
    for(let i=1; i<5; i++){
      if(this.imageReady == false){
        this.rss.getFeaturedImage(i).then(data => {
          data.forEach(element => {
            if(element.slug=='3-1-8'){
              this.featuredImage = element;
              this.imageReady = true;
              console.log('may featured image, fam');
            }
          });
        }, err => {
          console.log('Error fetching featured image');
        });
      }else{
        console.log('panget mo');
      }
    }
  }

  openEntry(entry){
    let data = {
      entryData: entry
    };

    this.navCtrl.push('EntryPage', data);
  }

  goSearch(){
    // this.adsProvider.hideAd();
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
            // this.adsProvider.showAd();
          }
        },
        {
          text: 'Go',
          handler: data => {
            if(data.keyword == ""){
              let alert = this.alertCtrl.create({
                title: 'Whoa there',
                message: 'You didn\'t type in anything!',
                buttons: ['oops']
              });
              alert.present();
              // this.adsProvider.showAd();
            } else {
              this.navCtrl.push('SearchResultPage', { keyword: data.keyword });
              // this.adsProvider.showAd();
            }
          }
        }
      ]
    });
    searchprompt.present();
  }

}