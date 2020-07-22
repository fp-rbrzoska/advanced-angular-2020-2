import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'fp-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {

  @Input() product: Product;

  showDetails = false;
  constructor() { }

  ngOnInit(): void {
  }

}
