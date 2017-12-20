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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        RsspagePage,
                        EntryPage
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
                        EntryPage
                    ],
                    providers: [
                        StatusBar,
                        SplashScreen,
                        InAppBrowser,
                        { provide: ErrorHandler, useClass: IonicErrorHandler }
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map