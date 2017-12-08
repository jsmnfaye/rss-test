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
  entries: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, public modalCtrl: ModalController) {
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

  parseUrl(){
    this.parseUrlWrapper().then((entries: Array<any>) => {
      this.entries = entries;
    });
  }

  parseUrlWrapper(){
    return new Promise((resolve,reject) => {
      RSSParser.parseURL('https://www.saipantribune.com/index.php/feed/', function(err,parsed){
        console.log(parsed.feed.title);
        console.log(parsed.feed.entries);
        if(err){
          reject(err);
        }
        resolve(parsed.feed.entries);
      });
    });
  }

  ionViewDidLoad() {
    console.clear();
    console.log('Hello, beautiful people of the Philippines!');

    this.parseUrl();
  }

}
