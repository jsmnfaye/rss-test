import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

declare var RSSParser;

@Component({
  selector: 'page-rsspage',
  templateUrl: 'rsspage.html',
})
export class RsspagePage {

  targetUrl: string;
  entries: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }

  openUrl(entry){
    this.iab.create(entry.link,"_system");
  }

  parseUrl(){
    this.parseUrlWrapper().then((entries: Array<any>) => {
      this.entries = entries;
    });
  }

  parseUrlWrapper(){
    return new Promise((resolve,reject) => {
      RSSParser.parseURL(this.targetUrl, function(err,parsed){
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
  }

}
