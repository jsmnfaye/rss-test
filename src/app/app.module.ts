import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
import { AdMobFree } from '@ionic-native/admob-free';

import { MyApp } from './app.component';
import { RsspagePage } from '../pages/rsspage/rsspage';
import { RssFeedProvider } from '../providers/rss-feed/rss-feed';
import { AdsProvider } from '../providers/ads/ads';

@NgModule({
  declarations: [
    MyApp,
    RsspagePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RsspagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    RssFeedProvider,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdsProvider
  ]
})
export class AppModule {}
