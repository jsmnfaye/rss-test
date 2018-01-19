import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html'
})
export class EntryPage {

  entry: any;
  pubDate: string;
  content: any;
  title: string;
  author: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.entry = this.navParams.get('entryData');
  }

  ionViewDidLoad() {
    let entryDetails = this.navParams.get('entryData');
    // console.clear();
    console.log('Clicked entry is now initializing...');
    console.log(entryDetails);
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
