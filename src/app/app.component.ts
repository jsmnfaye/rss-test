import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RsspagePage } from '../pages/rsspage/rsspage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage:any = RsspagePage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(category: number){
    console.clear();
    if(category == 1){
      this.nav.push('HeadlinesPage');
    } else if(category == 2) {
      this.nav.push('FeaturedPage');
    } else if(category == 3) {
      this.nav.push('BreakingNewsPage');
    } else if(category == 4) {
      this.nav.push('LocalNewsPage');
    } else if(category == 5) {
      this.nav.push('SportsPage');
    } else if(category == 6) {
      this.nav.push('OpinionPage');
    } else if(category == 7) {
      this.nav.push('EditorLettersPage');
    } else if(category == 8) {
      this.nav.push('LifeAndStylePage');
    } else if(category == 9) {
      this.nav.push('EnvironmentPage');
    } else if(category == 10) {
      this.nav.push('BusinessPage');
    } else if(category == 11) {
      this.nav.push('CommunityPage');
    } else if(category == 12) {
      this.nav.push('CampusLifePage');
    } else if(category == 13) {
      this.nav.push('FotogalleriaPage');
    } else if(category == 14) {
      this.nav.push('PacificPage');
    } else if(category == 15) {
      this.nav.push('BibaMarianasPage');
    }
    this.menuCtrl.close();
  }

}

