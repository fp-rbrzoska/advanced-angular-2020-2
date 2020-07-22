import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DemoService } from './demo.service';
import { Observable } from 'rxjs';
import { DemoData } from '../models/demo-data';
import { ReusableComponent } from '../shared/reusable/reusable.component';
import { TestDirective } from '../shared/test.directive';

@Component({
  selector: 'fp-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, AfterViewInit {

  @ViewChild('testEl') testEl: ElementRef;
  @ViewChildren(ReusableComponent) reusableComponents: QueryList<ReusableComponent>;
  @ViewChild(TestDirective) directive: TestDirective;

  demoData$: Observable<DemoData[]>;
  constructor(private demoService: DemoService) {
    this.demoData$ = this.demoService.demoData$;
    this.demoService.fetchData();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  changeReusableComponentsState() {
    this.directive.doSmthgOnClick();
    this.reusableComponents.forEach(c => c.test = !c.test)
  }

}
