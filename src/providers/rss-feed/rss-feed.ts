import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class RssFeedProvider {

  data: any;

  constructor(public http: Http) {
    console.log('Hello RssFeedProvider Provider');
  }

  // getTheGoods(pageNo: number){
  //   this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page='+pageNo).map(res => res.json()).subscribe(allNews =>{
  //     console.log("total number of data: "+allNews.length);
  //     for(let i = 0; i<allNews.length; i++){
  //       this.news.push(allNews[i]);
  //     }
  //     allNews;
  //   });
  //   pageNo = pageNo++;
  // }

  getTheGoods(pageNo: number){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page='+pageNo).map(res => res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

}
