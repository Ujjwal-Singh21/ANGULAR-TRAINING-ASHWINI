import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/shared/employee.model';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  companyName:string = 'Capgemini'
  companyLocation:string = 'Chennai - Prestige Cyber Towers'
  
  constructor() { }

  ngOnInit(): void {
  }
}
