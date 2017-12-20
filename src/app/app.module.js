import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { RsspagePage } from '../pages/rsspage/rsspage';
import { EntryPage } from '../pages/entry/entry';
import { RssFeedProvider } from '../providers/rss-feed/rss-feed';
import { CategoryPage } from '../pages/category/category';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
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
                        { provide: ErrorHandler, useClass: IonicErrorHandler },
                        RssFeedProvider
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map