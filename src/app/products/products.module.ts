import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { ProductsService } from './products.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductsListComponent, ProductsItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
