import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'fp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private productService: ProductsService) {
    this.products$ = this.productService.productsData$;
    this.productService.fetchData();
  }

  ngOnInit(): void {
  }

}
