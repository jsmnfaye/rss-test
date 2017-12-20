import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { EntryPage } from '../entry/entry';
import { Http } from '@angular/http';
import 'rxjs';
import { RssFeedProvider } from '../../providers/rss-feed/rss-feed';
var RsspagePage = (function () {
    function RsspagePage(navCtrl, navParams, modalCtrl, http, loadCtrl, rss) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.loadCtrl = loadCtrl;
        this.rss = rss;
        this.bnEntries = [];
        this.headlineEntries = [];
        this.news = [];
        this.pageNo = 1;
    }
    RsspagePage.prototype.refreshMe = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended.');
            refresher.complete();
        }, 2000);
    };
    RsspagePage.prototype.ionViewDidLoad = function () {
        var loading = this.loadCtrl.create({
            content: "Fetching latest articles...",
            duration: 3000
        });
        loading.present();
        console.clear();
        console.log('Hello, beautiful people of the Philippines!');
        this.rss.getTheGoods(this.pageNo);
        console.log(this.news);
        loading.dismiss();
    };
    RsspagePage.prototype.openEntry = function (entry) {
        var data = {
            entryData: entry
        };
        var modal = this.modalCtrl.create(EntryPage, data);
        modal.present();
    };
    RsspagePage.prototype.toInfinityAndBeyond = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.rss.getTheGoods(_this.pageNo),
                function (error) { return _this.errorMessage = error; };
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    RsspagePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-rsspage',
                    templateUrl: 'rsspage.html',
                },] },
    ];
    /** @nocollapse */
    RsspagePage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: ModalController, },
        { type: Http, },
        { type: LoadingController, },
        { type: RssFeedProvider, },
    ]; };
    return RsspagePage;
}());
export { RsspagePage };
//# sourceMappingURL=rsspage.js.map