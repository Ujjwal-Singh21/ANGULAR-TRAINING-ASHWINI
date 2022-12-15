import { Component, OnInit } from '@angular/core'
import { Employee } from 'src/shared/employee.model'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee1: Employee = new Employee(
    'Ujjwal',
    4500,
    'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg',
    ['Java', 'C++', 'ReactJS']
  )

  constructor () {}

  ngOnInit (): void {}
}
