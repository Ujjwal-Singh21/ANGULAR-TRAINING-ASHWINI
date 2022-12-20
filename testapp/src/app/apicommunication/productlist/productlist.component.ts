import { Component, OnInit } from '@angular/core';
import { ApiproductcommunicationService } from 'src/shared/apiproductcommunication.service';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: Product[];

  constructor(private apiproductcommunicationservice: ApiproductcommunicationService) { }

  ngOnInit(): void {
    this.apiproductcommunicationservice.getProducts()
    .subscribe((productListFromService: Product[]) => {
      this.productList = productListFromService;
    })

    // making get api call again once new product is added
    this.apiproductcommunicationservice.productListUpdated
    .subscribe((updatedProductListFlag: boolean) => {
      if(updatedProductListFlag) {
        this.apiproductcommunicationservice.getProducts()
        .subscribe((productListFromService: Product[]) => {
        this.productList = productListFromService;
    })
        }
    })
  }

}
