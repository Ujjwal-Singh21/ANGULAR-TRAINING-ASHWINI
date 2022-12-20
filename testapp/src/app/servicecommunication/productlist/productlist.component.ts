import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/product.model';
import { ProductService } from 'src/shared/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();

    // here we have subscribed and recieved the updated productList
    this.productService.getUpdatedProductList().subscribe((updatedProductListFromService: Product[]) => {
      this.productList = updatedProductListFromService;
    })
  }

}
