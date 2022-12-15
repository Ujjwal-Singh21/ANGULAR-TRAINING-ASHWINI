import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/shared/employee.model';

@Component({
  selector: 'app-employeeitem',
  templateUrl: './employeeitem.component.html',
  styleUrls: ['./employeeitem.component.css']
})
export class EmployeeitemComponent implements OnInit {

  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
