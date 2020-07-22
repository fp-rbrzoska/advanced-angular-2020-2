import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

  private productsDataSubj = new BehaviorSubject<Product[]>(null);
  productsData$ = this.productsDataSubj.asObservable();

  constructor(private http: HttpClient) { }

  fetchData() {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(data => this.productsDataSubj.next(data));
  }
}
