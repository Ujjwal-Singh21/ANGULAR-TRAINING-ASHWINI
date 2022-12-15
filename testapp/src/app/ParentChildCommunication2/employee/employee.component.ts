import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  storeEmployees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(newEmployee: Employee) {
    this.storeEmployees.push(newEmployee);
    console.log(newEmployee);
  }

}
