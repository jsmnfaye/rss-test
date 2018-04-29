import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html'
})
export class EntryPage {

  entry: any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.entry = this.navParams.get('entryData');
  }

  ionViewDidLoad() {
    console.log(this.entry);
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
