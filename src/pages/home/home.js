import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map