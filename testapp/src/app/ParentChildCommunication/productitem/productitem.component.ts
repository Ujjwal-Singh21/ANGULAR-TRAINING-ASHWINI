import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input() product:Product; //input prop i.e this will always recieve the value from parent component property

  constructor() { }

  ngOnInit(): void {
  }

}
