import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage:any = 'RsspagePage';
  pages: Array<{category_name: string, component: any, slug: string}>;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menuCtrl: MenuController
  ) {
    this.pages = [
      {
          category_name : "Headlines",
          component :  'HeadlinesPage',
          slug : "headlines"
      },
      {
          category_name : "Featured",
          component :  "FeaturedPage",
          slug : "featured"
      },
      {
          category_name : "Breaking News",
          component :  "BreakingNewsPage",
          slug : "breaking-news"
      },
      {
          category_name : "Local News",
          component :  "LocalNewsPage",
          slug : "local-news"
      },
      {
          category_name : "Sports",
          component :  "SportsPage",
          slug : "sports"
      },
      {
          category_name : "Opinion",
          component :  "OpinionPage",
          slug : "opinion"
      },
      {
          category_name : "Letters to the Editor",
          component :  "EditorLettersPage",
          slug : "letters-to-the-editor"
      },
      {
          category_name : "Life and Style",
          component :  "LifeAndStylePage",
          slug : "life-and-style"
      },
      {
          category_name : "Environment",
          component :  "EnvironmentPage",
          slug : "environment"
      },
      {
          category_name : "Business",
          component :  "BusinessPage",
          slug : "business"
      },
      {
          category_name : "Community",
          component :  "CommunityPage",
          slug : "community"
      },
      {
          category_name : "Campus Life",
          component :  "CampusLifePage",
          slug : "campus-life"
      },
    //   {
    //       category_name : "Fotogalleria",
    //       component :  "FotogalleriaPage",
    //       slug : "fotogalleria"
    //   },
      {
          category_name : "Pacific",
          component :  "PacificPage",
          slug : "pacific"
      },
      {
          category_name : "Biba Marianas!",
          component :  "BibaMarianasPage",
          slug : "biba-marianas"
      }
  ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    console.clear();
    let data = {
        pageInfo: page
    };
    console.log(data);
    this.nav.setRoot('CategoryPage', data);
    this.menuCtrl.close();
  }

}

