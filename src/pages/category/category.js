import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
var CategoryPage = (function () {
    function CategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-category',
                    templateUrl: 'category.html',
                },] },
    ];
    /** @nocollapse */
    CategoryPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
    ]; };
    return CategoryPage;
}());
export { CategoryPage };
//# sourceMappingURL=category.js.map