import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';
import { DiscountedproductsComponent } from './apicommunication/discountedproducts/discountedproducts.component';
import { LoginComponent } from './apicommunication/login/login.component';
import { LogoutComponent } from './apicommunication/logout/logout.component';
import { ProductComponent } from './apicommunication/product/product.component';
import { ProductcreateComponent } from './apicommunication/productcreate/productcreate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full' //  algm to match full path with url without any spaces
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
    ],

    canActivate: [AuthGuard] // /products is safe guarded and not exposed to anonymous users
  },

  {
    path: 'discountedproducts',
    component: DiscountedproductsComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
