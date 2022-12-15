import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/shared/employee.model';

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {

  name: string;
  salary: number;
  imagepath: string;
  // skillset: string;

  @Output() addEmployeeEvent = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(){
    let newEmployee = new Employee(this.name, this.salary, this.imagepath);
    this.addEmployeeEvent.emit(newEmployee);
  }

}
