import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettifier',
})
export class PrettifierPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(val, ...args) {

    if(val.substring(0, 4) == "<div"){
      val = val.split("<p class=\"wp-caption-text\">")[1];
    }

    // ^ you can add .length instead of index 0 to get array length

    return val;
  }
}
