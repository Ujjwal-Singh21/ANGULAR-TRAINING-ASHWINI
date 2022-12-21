import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountedproductsComponent } from './apicommunication/discountedproducts/discountedproducts.component';
import { ProductComponent } from './apicommunication/product/product.component';
import { ProductcreateComponent } from './apicommunication/productcreate/productcreate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },

  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: 'new', // https:localhost:4200/products/new
        component: ProductcreateComponent
      },

      {
        path: 'edit/:id',
        component: ProductcreateComponent
      }
    ]
  },

  {
    path: 'discountedproducts',
    component: DiscountedproductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
