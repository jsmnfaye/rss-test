import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RsspagePage } from '../pages/rsspage/rsspage';
import { BreakingNewsPage } from '../pages/categories/breaking-news/breaking-news';
import { LocalNewsPage } from '../pages/categories/local-news/local-news';
import { SportsPage } from '../pages/categories/sports/sports';
import { OpinionPage } from '../pages/categories/opinion/opinion';
import { EditorLettersPage } from '../pages/categories/editor-letters/editor-letters';
import { LifeAndStylePage } from '../pages/categories/life-and-style/life-and-style';
import { EnvironmentPage } from '../pages/categories/environment/environment';
import { BusinessPage } from '../pages/categories/business/business';
import { CommunityPage } from '../pages/categories/community/community';
import { CampusLifePage } from '../pages/categories/campus-life/campus-life';
import { FotogalleriaPage } from '../pages/categories/fotogalleria/fotogalleria';
import { PacificPage } from '../pages/categories/pacific/pacific';
import { BibaMarianasPage } from '../pages/categories/biba-marianas/biba-marianas';

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
      this.nav.setRoot(RsspagePage);
    } else if(category == 2) {
      this.nav.setRoot(BreakingNewsPage);
    } else if(category == 3) {
      this.nav.setRoot(LocalNewsPage);
    } else if(category == 4) {
      this.nav.setRoot(SportsPage);
    } else if(category == 5) {
      this.nav.setRoot(OpinionPage);
    } else if(category == 6) {
      this.nav.setRoot(EditorLettersPage);
    } else if(category == 7) {
      this.nav.setRoot(LifeAndStylePage);
    } else if(category == 8) {
      this.nav.setRoot(EnvironmentPage);
    } else if(category == 9) {
      this.nav.setRoot(BusinessPage);
    } else if(category == 10) {
      this.nav.setRoot(CommunityPage);
    } else if(category == 11) {
      this.nav.setRoot(CampusLifePage);
    } else if(category == 12) {
      this.nav.setRoot(FotogalleriaPage);
    } else if(category == 13) {
      this.nav.setRoot(PacificPage);
    } else if(category == 14) {
      this.nav.setRoot(BibaMarianasPage);
    }
    this.menuCtrl.close();
  }

}

