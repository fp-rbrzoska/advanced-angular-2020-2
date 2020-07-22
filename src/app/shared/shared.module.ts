import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponent } from './reusable/reusable.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [ReusableComponent, TestDirective],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  exports: [
    ButtonsModule,
    ReusableComponent,
    TestDirective
  ]
})
export class SharedModule { }
