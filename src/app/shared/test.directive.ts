import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[fpTest]'
})
export class TestDirective implements OnInit {

  @Input() fpTest: string;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
    renderer.setStyle(this.el.nativeElement, 'border','2px solid red' );
    //el.nativeElement.style.border = '2px solid red'
  }

  ngOnInit() {
  }

  @HostListener('click')
  doSmthgOnClick() {
    alert(this.fpTest)
  }

}
