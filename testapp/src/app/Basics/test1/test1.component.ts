import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Shared/employee.model';
import { Product } from 'src/Shared/product.model';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  companyName:string = 'Capgemini'
  product = new Product(101, 'Sample Product')
  employee1 = new Employee(9000, 'Ujjwal', 15000)

  constructor() { }

  ngOnInit(): void {
  }
}
