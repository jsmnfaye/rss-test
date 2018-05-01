import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettifier',
})
export class PrettifierPipe implements PipeTransform {
  /**
   * Deletes unnecessary HTML code from the content
   * key taken from JSON file from server hahaha
   */
  transform(val, ...args) {

    if(val.substring(0, 4) == "<div"){
      val = val.split("<p class=\"wp-caption-text\">")[1];
    }

    return val;
  }
}
