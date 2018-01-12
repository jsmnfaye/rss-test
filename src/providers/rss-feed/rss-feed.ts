import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class RssFeedProvider {

  data: any;

  constructor(public http: Http) {
    console.log('Hello, RSS Feed Provider!');
  }
  
  getTheGoods(pageNo: number, category: string){
    console.log('Page #'+pageNo+', '+category);
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('https://www.saipantribune.com/index.php/wp-json/posts?page='+pageNo+'&filter[category_name]='+category).map(res => res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

}
