import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
var RssFeedProvider = (function () {
    function RssFeedProvider(http) {
        this.http = http;
        this.news = [];
        console.log('Hello RssFeedProvider Provider');
    }
    RssFeedProvider.prototype.getTheGoods = function (pageNo) {
        var _this = this;
        pageNo = pageNo++;
        this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page=' + pageNo).map(function (res) { return res.json(); }).subscribe(function (allNews) {
            console.log("total number of data: " + allNews.length);
            for (var i = 0; i < allNews.length; i++) {
                _this.news.push(allNews[i]);
            }
        });
    };
    RssFeedProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RssFeedProvider.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return RssFeedProvider;
}());
export { RssFeedProvider };
//# sourceMappingURL=rss-feed.js.map