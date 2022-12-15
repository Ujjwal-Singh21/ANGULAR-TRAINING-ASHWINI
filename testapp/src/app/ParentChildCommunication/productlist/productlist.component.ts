import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

 @Input() productList: Product[];
 
 /* = [
    new Product(
      'Noise-Headphones',
      'Wireless',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdvD7jdPzOBshEwy_9rL-yZj-iQG6x-ULoQ&usqp=CAU',
      5,
      ['Amazing', 'Average', 'Perfect']
    ),
    new Product(
      'Boat-Headphones',
      'Wireless',
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627',
      5,
      ['Good', 'Worth for money']
    ),

    new Product(
      'JBL-Headphones',
      'Wireless',
      'https://5.imimg.com/data5/SELLER/Default/2021/12/LG/XI/LQ/40612680/61xxgppml8s-sl1500--250x250.jpg',
      3,
      ['Nice combo offer', 'Best in this range']
    ),

    new Product(
      'Sony-Headphones',
      'Wireless',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqGd0fkvTyYQzhYx8SgFhASlkzs44D0qjnA&usqp=CAU',
      6
    )
  ] */

  constructor() { }

  ngOnInit(): void {
  }

}
