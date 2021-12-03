import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective {
  @Input() set appBackground(answerStatus: string) {
    if (answerStatus === 'Correct') {
      this.bgClass = 'alert-success';
    } else if (answerStatus === 'Incorrect') {
      this.bgClass = 'alert-danger';
    }
  }

  bgClass = 'none';

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('submit') addClass() {
    this.render.addClass(this.el.nativeElement, this.bgClass);
  }
}
