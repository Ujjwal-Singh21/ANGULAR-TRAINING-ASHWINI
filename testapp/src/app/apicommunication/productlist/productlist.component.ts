import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiproductcommunicationService } from 'src/shared/apiproductcommunication.service';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: Product[] = [];

  constructor(private apiproductcommunicationservice: ApiproductcommunicationService,
    private router: Router, private route: ActivatedRoute) { }

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

  
  onAddNewProduct() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
