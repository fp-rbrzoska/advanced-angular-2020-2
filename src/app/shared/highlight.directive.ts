import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[fpHighlight]'
})
export class HighlightDirective {

  @Input() fpHighlight;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover')
  setHighlightClass() {
    this.renderer.addClass(this.el.nativeElement, this.fpHighlight)
  }

  @HostListener('mouseout')
  unsetHighlightClass() {
    this.renderer.removeClass(this.el.nativeElement, this.fpHighlight)
  }

}
