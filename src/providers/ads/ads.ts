import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Injectable()
export class AdsProvider {

  constructor(public admob: AdMobFree) {
  }

  showAd(){
    const bannerConfig: AdMobFreeBannerConfig = {
      // id: 'ca-app-pub-2098547412274378/6069518286',
      isTesting: true, //change to FALSE if building for production
      autoShow: true,
      bannerAtTop: false 
    };

    this.admob.banner.config(bannerConfig);
    this.admob.banner.prepare().then((res) => {
      console.log('Admob status: '+res);
    }, (err) => {
      console.log(err);
    });
  }

  hideAd(){
    this.admob.banner.hide().then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

}
