import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule, Routes } from '@angular/router';

import {CustomerService} from './services/customerServices';
import {CustomerPageComponent} from './customer-page/customer-page';
import {CustomerPayementsComponent} from './all-payment-customer/all-payment-customer';

const routes: Routes = [
  { path: '', component: CustomerPageComponent},
  {path: 'paymentCustomer/:id', component: CustomerPayementsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomerPageComponent,
    CustomerPayementsComponent
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule {}
