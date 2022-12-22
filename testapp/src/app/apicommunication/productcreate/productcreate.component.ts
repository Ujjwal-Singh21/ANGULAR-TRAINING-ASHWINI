import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiproductcommunicationService } from 'src/shared/apiproductcommunication.service';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  id: number;
  editMode: boolean;

  // It provide access to html file elements and its values from ts file 
  @ViewChild('productForm') productFormViewChild:NgForm;

  constructor(private apiproductcommunicationservice: ApiproductcommunicationService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id']!= null;
      this.initForm();
    })
  }

  // handler to populate form during update
  //---------------------------------------
  initForm() {

    let productDetails: Product;

   if(this.editMode == true) {
    this.apiproductcommunicationservice.getProduct(this.id)
    .subscribe((currentProductDetails: Product) => {

      productDetails = currentProductDetails;

      this.productFormViewChild
      .setValue({title: productDetails.title, description: productDetails.description,
                 imagepath: productDetails.imagepath, quantity: productDetails.quantity})
    })
   }
  }

  // Handler that handles both add/update events
  //---------------------------------------------
  onAddNewProduct(productForm: NgForm) {
   
    // add-logic
    if(this.editMode == false) {
      this.apiproductcommunicationservice.addProduct(productForm.value.title, productForm.value.description,
        productForm.value.imagepath, productForm.value.quantity)
        .subscribe((response) => {
          console.log('Add response', response);
  
          // as soon as new product is added by user, we set Observable flag to true 
          this.apiproductcommunicationservice.productListUpdated.next(true);
        });

        // navigate to /products as soon as new product is added and make form to disappear
        this.router.navigate(['']);
    } 

    //update-logic
    else {
      let updatedProduct = new Product(productForm.value.title, productForm.value.description,
        productForm.value.imagepath, productForm.value.quantity);

        updatedProduct.id = this.id;

      this.apiproductcommunicationservice.updateProduct(updatedProduct)
      .subscribe((resp) => {
        console.log('Update respose', resp)
        this.apiproductcommunicationservice.productListUpdated.next(true);
      })

      this.router.navigate(['']);
    }
  }

}
