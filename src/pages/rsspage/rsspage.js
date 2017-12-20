import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { EntryPage } from '../entry/entry';
import { Http } from '@angular/http';
import 'rxjs';
import { RssFeedProvider } from '../../providers/rss-feed/rss-feed';
var RsspagePage = (function () {
<<<<<<< HEAD
    function RsspagePage(navCtrl, navParams, modalCtrl, http, loadCtrl) {
=======
    function RsspagePage(navCtrl, navParams, modalCtrl, http, loadCtrl, rss) {
>>>>>>> sidemenu
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
<<<<<<< HEAD
        }, 3000);
=======
        }, 2000);
>>>>>>> sidemenu
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
<<<<<<< HEAD
    RsspagePage.prototype.getTheGoods = function (pageNo) {
        var _this = this;
        this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page=' + pageNo).map(function (res) { return res.json(); }).subscribe(function (allNews) {
            console.log("total number of data: " + allNews.length);
            for (var i = 0; i < allNews.length; i++) {
                _this.news.push(allNews[i]);
            }
            allNews;
        });
        pageNo = pageNo++;
    };
    RsspagePage.prototype.toInfinityAndBeyond = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.getTheGoods(_this.pageNo),
=======
    RsspagePage.prototype.toInfinityAndBeyond = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.rss.getTheGoods(_this.pageNo),
>>>>>>> sidemenu
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