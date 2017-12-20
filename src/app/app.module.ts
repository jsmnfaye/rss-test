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
import { CategoryPage } from '../pages/category/category';

@NgModule({
  declarations: [
    MyApp,
    RsspagePage,
    EntryPage,
    CategoryPage
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
    CategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
