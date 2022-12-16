import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  // title: string;
  // description: string;
  // imagepath:string;
  // quantity:number;

  @Output() addProductEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewProduct(productForm: NgForm) {

    let newProduct = new Product(productForm.value.title, productForm.value.description, 
                                 productForm.value.imagepath, productForm.value.quantity);

    this.addProductEvent.emit(newProduct);
  }

  // onAddNewProduct() {
  //   let newProduct = new Product(this.title, this.description, this.imagepath, this.quantity);
  //   this.addProductEvent.emit(newProduct);
  // }

}
