import { Component, OnInit } from '@angular/core'
import { Product } from 'src/shared/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  product: Product = new Product(
    'Headphones',
    'Wireless',
    'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg',
    5,
    ['Amazing', 'nice', 'Average', 'Perfect for this price range']
  );

  constructor () {}

  ngOnInit (): void {}
}
