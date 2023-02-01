import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path: 'index', component: CustomersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'customer/:id', component: CustomerComponent},
  {path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
