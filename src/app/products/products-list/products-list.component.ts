import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { ProductsItemComponent } from '../products-item/products-item.component';

@Component({
  selector: 'fp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]>;

  @ViewChildren(ProductsItemComponent) productItems: QueryList<ProductsItemComponent>;
  constructor(private productService: ProductsService) {
    this.products$ = this.productService.productsData$;
    this.productService.fetchData();
  }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.productItems.forEach(p => p.showDetails = !p.showDetails);
  }

}
