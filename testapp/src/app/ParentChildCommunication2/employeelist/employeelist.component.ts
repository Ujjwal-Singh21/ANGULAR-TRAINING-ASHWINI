import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/shared/employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employeeList: Employee[] = [
    new Employee(
      'Steve',
      4500,
      'https://cdn.britannica.com/04/171104-050-AEFE3141/Steve-Jobs-iPhone-2010.jpg',
      ['Java', 'C++', 'ReactJS']
    ),

    new Employee(
      'Bruce',
      1200,
      'https://upload.wikimedia.org/wikipedia/en/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg',
      ['JavaScript', 'C-Sharp']
    ),

    new Employee(
      'Clarke',
      44600,
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Bruce_Wayne_PhilChoArt.jpg',
      ['TypeScript', 'Spring']
    ),

    new Employee(
      'Diana',
      12300,
      'https://safetyculture.com/wp-content/media/2022/09/lone-worker-alarm-featured.jpg',
      ['Java', 'Hibernate', 'SpringBoot']
    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
