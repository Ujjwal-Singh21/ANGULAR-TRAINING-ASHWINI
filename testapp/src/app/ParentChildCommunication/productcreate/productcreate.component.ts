import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  title: string;
  description: string;
  imagepath:string;
  quantity:number;

  @Output() addProductEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewProduct() {
    let newProduct = new Product(this.title, this.description, this.imagepath, this.quantity);
    this.addProductEvent.emit(newProduct);
  }

}
