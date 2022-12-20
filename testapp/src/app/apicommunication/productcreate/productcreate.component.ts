import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiproductcommunicationService } from 'src/shared/apiproductcommunication.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  constructor(private apiproductcommunicationservice: ApiproductcommunicationService) { }

  ngOnInit(): void {
  }

  onAddNewProduct(productForm: NgForm) {
   
    this.apiproductcommunicationservice.addProduct(productForm.value.title, productForm.value.description,
      productForm.value.imagepath, productForm.value.quantity)
      .subscribe((response) => {
        console.log(response);

        // as soon as new product is added by user, we set Observable flag to true 
        this.apiproductcommunicationservice.productListUpdated.next(true);
      })
  }


}
