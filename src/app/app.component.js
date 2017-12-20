import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RsspagePage } from '../pages/rsspage/rsspage';
import { CategoryPage } from '../pages/category/category';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = RsspagePage;
        this.category = '';
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToPage = function () {
        console.clear();
        console.log(this.category);
        this.nav.setRoot(CategoryPage);
        this.menuCtrl.close();
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = function () { return [
        { type: Platform, },
        { type: StatusBar, },
        { type: SplashScreen, },
        { type: MenuController, },
    ]; };
    MyApp.propDecorators = {
        "nav": [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map