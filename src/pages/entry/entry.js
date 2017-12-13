import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
var EntryPage = (function () {
    function EntryPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.entry = this.navParams.get('entryData');
    }
    EntryPage.prototype.ionViewDidLoad = function () {
        var entryDetails = this.navParams.get('entryData');
        console.clear();
        console.log('Clicked entry is now initializing...');
        console.log(entryDetails);
    };
    EntryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EntryPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-entry',
                    templateUrl: 'entry.html',
                },] },
    ];
    /** @nocollapse */
    EntryPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: ViewController, },
    ]; };
    return EntryPage;
}());
export { EntryPage };
//# sourceMappingURL=entry.js.map