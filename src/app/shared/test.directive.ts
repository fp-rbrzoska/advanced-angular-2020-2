import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[fpTest]'
})
export class TestDirective {

  @Input() fpTest: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(this.el.nativeElement, 'border','2px solid red' );
    //el.nativeElement.style.border = '2px solid red'
  }

  @HostListener('click')
  doSmthgOnClick() {
    alert(this.fpTest)
  }

}
