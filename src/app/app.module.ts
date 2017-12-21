import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule, Http } from '@angular/http';

import { MyApp } from './app.component';
import { RsspagePage } from '../pages/rsspage/rsspage';
import { EntryPage } from '../pages/entry/entry';
import { RssFeedProvider } from '../providers/rss-feed/rss-feed';
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

@NgModule({
  declarations: [
    MyApp,
    RsspagePage,
    EntryPage,
    BreakingNewsPage,
    LocalNewsPage,
    SportsPage,
    OpinionPage,
    EditorLettersPage,
    LifeAndStylePage,
    EnvironmentPage,
    BusinessPage,
    CommunityPage,
    CampusLifePage,
    FotogalleriaPage,
    PacificPage,
    BibaMarianasPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RsspagePage,
    EntryPage,
    BreakingNewsPage,
    LocalNewsPage,
    SportsPage,
    OpinionPage,
    EditorLettersPage,
    LifeAndStylePage,
    EnvironmentPage,
    BusinessPage,
    CommunityPage,
    CampusLifePage,
    FotogalleriaPage,
    PacificPage,
    BibaMarianasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    RssFeedProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
