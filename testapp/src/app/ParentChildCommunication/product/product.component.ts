import { Component, OnInit } from '@angular/core'
import { Product } from 'src/shared/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  storeProducts: Product[] = [];

  constructor () {}

  ngOnInit (): void {}

  onAddNewProduct (newProduct: Product) {
    this.storeProducts.push(newProduct)
    console.log(this.storeProducts)
  }
  
}
