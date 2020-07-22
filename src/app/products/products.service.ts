import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { CONFIG_TOKEN } from '../core/tokens';

@Injectable()
export class ProductsService {

  private productsDataSubj = new BehaviorSubject<Product[]>(null);
  productsData$ = this.productsDataSubj.asObservable();

  constructor(private http: HttpClient, @Inject(CONFIG_TOKEN) private config: any) {
    console.log(config)
   }

  fetchData() {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(data => this.productsDataSubj.next(data));
  }
}
