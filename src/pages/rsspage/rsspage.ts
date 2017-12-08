import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

declare var RSSParser;

@Component({
  selector: 'page-rsspage',
  templateUrl: 'rsspage.html',
})
export class RsspagePage {

  targetUrl: string;
  bnEntries: Array<any> = [];
  headlineEntries: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, public modalCtrl: ModalController) {
  }
  
  ionViewDidLoad() {
    console.clear();
    console.log('Hello, beautiful people of the Philippines!');

    this.parseBNUrls();
    this.parseHeadlineUrls();
  }

  openUrl(entry){
    this.iab.create(entry.link,"_system");
  }

  openEntry(entry){
    let data = {
      entryData: entry 
    }

    // let modal = this.modalCtrl.create(EntryPage, data);
    // modal.present();
  }

  parseBNUrls(){
    this.parseUrlWrapper1().then((bnEntries: Array<any>) => {
      this.bnEntries = bnEntries;
    });
  }

  parseHeadlineUrls(){
    this.parseUrlWrapper2().then((headlineEntries: Array<any>) => {
      this.headlineEntries = headlineEntries;
    });
  }

  parseUrlWrapper1(){
    return new Promise((resolve,reject) => {
      RSSParser.parseURL('https://www.saipantribune.com/index.php/category/breaking-news/feed/', function(err,parsed){
        console.log(parsed.feed.title);
        console.log(parsed.feed.entries);
        if(err){
          reject(err);
        }
        resolve(parsed.feed.entries);
      });
    });
  }

  parseUrlWrapper2(){
    return new Promise((resolve,reject) => {
      RSSParser.parseURL('https://www.saipantribune.com/index.php/category/headlines/feed/', function(err,parsed){
        console.log(parsed.feed.title);
        console.log(parsed.feed.entries);
        if(err){
          reject(err);
        }
        resolve(parsed.feed.entries);
      });
    });
  }

}
