import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponent } from './reusable/reusable.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [ReusableComponent],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  exports: [
    ButtonsModule,
    ReusableComponent
  ]
})
export class SharedModule { }
