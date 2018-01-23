import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmldecoder',
})
export class HtmldecoderPipe implements PipeTransform {
  /**
   * Takes a value and decodes html entities.
   */
  transform(value: string, ...args) {

    let parser = new DOMParser;
    let dom = parser.parseFromString(
      '<!doctype html><body>'+value,'text/html'
    );

    let newValue = dom.body.textContent;

    return newValue;
  }
}
