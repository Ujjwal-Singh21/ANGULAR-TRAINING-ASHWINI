import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './Basics/job/job.component';

// import { ProductComponent } from './ParentChildCommunication/product/product.component';
// import { ProductcreateComponent } from './ParentChildCommunication/productcreate/productcreate.component';
// import { ProductitemComponent } from './ParentChildCommunication/productitem/productitem.component';
// import { ProductlistComponent } from './ParentChildCommunication/productlist/productlist.component';

import { EmployeeComponent } from './ParentChildCommunication2/employee/employee.component';
import { EmployeelistComponent } from './ParentChildCommunication2/employeelist/employeelist.component';
import { EmployeeitemComponent } from './ParentChildCommunication2/employeeitem/employeeitem.component';
import { FormsModule } from '@angular/forms';
import { EmployeecreateComponent } from './ParentChildCommunication2/employeecreate/employeecreate.component';
import { RegisterComponent } from './RegisterDetailTask/register/register.component';
import { DetailComponent } from './RegisterDetailTask/detail/detail.component';


// Services 
//---------
// import { ProductComponent } from './servicecommunication/product/product.component';
// import { ProductlistComponent } from './servicecommunication/productlist/productlist.component';
// import { ProductitemComponent } from './servicecommunication/productitem/productitem.component';
// import { ProductcreateComponent } from './servicecommunication/productcreate/productcreate.component';

// Api communication
//------------------
import { ProductComponent } from './apicommunication/product/product.component';
import { ProductcreateComponent } from './apicommunication/productcreate/productcreate.component';
import { ProductlistComponent } from './apicommunication/productlist/productlist.component';
import { ProductitemComponent } from './apicommunication/productitem/productitem.component';
import { InmemorydataService } from 'src/shared/inmemorydata.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './apicommunication/header/header.component';
import { DiscountedproductsComponent } from './apicommunication/discountedproducts/discountedproducts.component';

@NgModule({
  declarations: [
    AppComponent,

    // ProductComponent,
    // ProductcreateComponent,
    // ProductlistComponent,
    // ProductitemComponent,

    JobComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeeitemComponent,
    EmployeecreateComponent,

    RegisterComponent,
    DetailComponent,
    
    // ProductcreateComponent,
    // ProductComponent,
    // ProductlistComponent,
    // ProductitemComponent,

    ProductComponent,
    ProductcreateComponent,
    ProductlistComponent,
    ProductitemComponent,
    HeaderComponent,
    DiscountedproductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InmemorydataService,
      {dataEncapsulation: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
