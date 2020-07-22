import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponent } from './reusable/reusable.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TestDirective } from './test.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [ReusableComponent, TestDirective, HighlightDirective],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  exports: [
    ButtonsModule,
    ReusableComponent,
    TestDirective,
    HighlightDirective
  ]
})
export class SharedModule { }
