import { Component, Input, OnInit } from '@angular/core';
import { Register } from 'src/shared/register.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() userDetailsArr: Register[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
