import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [
    new Product(
      'Service Noise-Headphones',
      'Wireless',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdvD7jdPzOBshEwy_9rL-yZj-iQG6x-ULoQ&usqp=CAU',
      5,
      ['Amazing', 'Average', 'Perfect']
    ),
    new Product(
      'Service Boat-Headphones',
      'Wireless',
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627',
      5,
      ['Good', 'Worth for money']
    ),

    new Product(
      'Service JBL-Headphones',
      'Wireless',
      'https://5.imimg.com/data5/SELLER/Default/2021/12/LG/XI/LQ/40612680/61xxgppml8s-sl1500--250x250.jpg',
      3,
      ['Nice combo offer', 'Best in this range']
    ),

    new Product(
      'Service Sony-Headphones',
      'Wireless',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqGd0fkvTyYQzhYx8SgFhASlkzs44D0qjnA&usqp=CAU',
      6
    )
  ];

  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCDjbY5PilViw7fyF9vqmDvVi0xs3fRS5Ug&usqp=CAU

  // creating the Subject Observable which is multicast and helps in publishing updated Product List
  //------------------------------------------------------------------------------------------------
  private updatedProductList = new Subject<Product[]>();

  // Since subject observable is private hence required getter method and return it asObservable()
  //----------------------------------------------------------------------------------------------
  getUpdatedProductList() {
    return this.updatedProductList.asObservable();
  }


  constructor() { }

  getProducts() {
    return [...this.productList];
  }


  // Once new Product is added we are going to publish the updated list
  //--------------------------------------------------------------------
  addProduct(title: string, description: string, imagepath: string, quantity: number ) {
    let newProduct = new Product(title, description, imagepath, quantity);
    this.productList.push(newProduct);

    this.updatedProductList.next([...this.productList]);

    console.log(this.productList);
  }
}
