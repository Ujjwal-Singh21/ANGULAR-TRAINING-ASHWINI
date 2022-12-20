import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiproductcommunicationService {

  private productsUrl = 'api/products'

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
