import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiproductcommunicationService {

  private productsUrl = 'api/products'

  // to keep reader and writer in sync with updated list of products
  productListUpdated = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  // get 
  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  // add/post
  addProduct(title: string, description: string, imagepath: string, quantity: number): Observable<Product> {
    const product = {
      title: title,
      description: description,
      imagepath: imagepath,
      quantity: quantity,
    }
   return this.http.post<Product>(this.productsUrl, product);
  }

  // get by id 
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`)
  }

  // update 
  updateProduct(updatedProduct: Product): Observable<any> {
    return this.http.put(`${this.productsUrl}/${updatedProduct.id}`, updatedProduct);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.productsUrl}/${id}`);
  }

}
