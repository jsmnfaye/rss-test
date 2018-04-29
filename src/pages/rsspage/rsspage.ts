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
  pageNo: number = 1;
  headlines: any[] = [];
  featured: any[] = [];
  breaking: any[] = [];
  category: string = '';
  featuredImage: any;

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
    let loading = this.loadCtrl.create({
      content: "Fetching latest articles...",
      duration: 3000
    });
    loading.present();

    for(let x = 0; x<10; x++){
      this.getFeaturedImage(x);
    }

    for(let i = 0; i<30; i++){
      this.getArticles(this.pageNo);
    }
  }


  /*  getArticles(pageNo: number)    
      Parameter/s: page number
      Purpose: gets articles using the RSS Feed provider I made by calling the getTheGoods() function, which takes in two parameters: page number and category. The page number increases every time the article is called again, and the category is blank (yes, this is fine). The data pushed onto respective arrays per category and appear on the front page. */

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
    this.pageNo++;
  }


  /*  getFeaturedImage(pageNo: number)    
      Parameter/s: page number
      Purpose: gets the Photo of the Day and displays it on the front page. If it does not get a photo, nothing will appear. It checks every element, however, so getting no result is unlikely. If anything, it could get the wrong photo of the day.

      Note: change "3-1-18" to proper default slug in the future. You may also decide to use another property instead, such as the photo's title instead of the slug. If that makes a difference. */

  getFeaturedImage(pageNo: number){
    this.rss.getFeaturedImage(pageNo).then(data => {
      data.forEach(element => {
        if(this.featuredImage == undefined){
          if(element.slug=="3-1-18"){
            this.featuredImage = element;
          }
        }
      });
    }, err => {
      console.log('Error fetching featured image');
    });
  }


  /*  openEntry(entry)    
      Parameter/s: entry (object type)
      Purpose: this is the function called when a user clicks on an article to read. It takes in the object details of whatever is clicked and "pushes" that data onto a new page, in this case, the Entry Page, so we can make use of it there. */

  openEntry(entry){
    let data = {
      entryData: entry
    };

    this.navCtrl.push('EntryPage', data);
  }


  /*  goSearch(entry)    
      Parameter/s: none
      Purpose: for searching articles according to a keyword. An alert prompt appears which asks the user for a keyword. Buttons have a handler for different use cases. 
      
      Note: I have commented out function calls related to AdMob for now because at this time according to Ms. Les, "ads aren't important right now." */

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
            } else if(data.keyword == "faye atendido") {
              this.navCtrl.push('SearchResultPage', { keyword: data.keyword });
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