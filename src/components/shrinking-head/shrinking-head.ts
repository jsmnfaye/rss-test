import { Component, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'shrinking-head',
  templateUrl: 'shrinking-head.html'
})
export class ShrinkingHeadComponent {

  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;

  newHeaderHeight: any;

  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('shrinking heads are appearing...');
  }

  ngAfterViewInit(){
    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');

    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });
  }

  resizeHeader(ev){
    ev.domWrite(() => {
      this.newHeaderHeight = this.headerHeight - ev.scrollTop;

      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      }

      this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
    });
  }

}
