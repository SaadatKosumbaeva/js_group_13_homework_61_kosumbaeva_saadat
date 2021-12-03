import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})

export class DisplayDirective {
  icClicked = false;

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click') addClass() {
    let element = this.el.nativeElement.querySelector('span');
    if (!this.icClicked) {
      this.render.removeClass(element, 'd-none');
      this.icClicked = true;
    } else {
      this.render.addClass(element, 'd-none');
      this.icClicked = false;
    }
  }

}
