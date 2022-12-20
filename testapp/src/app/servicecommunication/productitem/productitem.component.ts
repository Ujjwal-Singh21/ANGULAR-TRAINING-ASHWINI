import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
