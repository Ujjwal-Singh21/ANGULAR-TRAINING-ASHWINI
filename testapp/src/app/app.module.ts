import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './Basics/job/job.component';

import { ProductComponent } from './ParentChildCommunication/product/product.component';
import { ProductitemComponent } from './ParentChildCommunication/productitem/productitem.component';
import { ProductlistComponent } from './ParentChildCommunication/productlist/productlist.component';

import { EmployeeComponent } from './ParentChildCommunication2/employee/employee.component';
import { EmployeelistComponent } from './ParentChildCommunication2/employeelist/employeelist.component';
import { EmployeeitemComponent } from './ParentChildCommunication2/employeeitem/employeeitem.component';
import { FormsModule } from '@angular/forms';
import { ProductcreateComponent } from './ParentChildCommunication/productcreate/productcreate.component';
import { EmployeecreateComponent } from './ParentChildCommunication2/employeecreate/employeecreate.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    ProductitemComponent,
    JobComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeeitemComponent,
    ProductcreateComponent,
    EmployeecreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
