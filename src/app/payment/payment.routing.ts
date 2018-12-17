import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AddPaymentPageComponent} from './add-payment/add-payment';
import {CurrentPaymentsPageComponent} from './current-payment/current-payment';
import {EditPaymentPageComponent } from './edit-payment/edit-payment';
import {PaymentReportsPageComponent} from './payments-by-date/payment-report';
import {PaymentComponent} from './payment.component';

const routes: Routes = [
  { path: '', component: PaymentComponent,
  children: [
    {
      path: 'add-payment', component: AddPaymentPageComponent
    },
    {
      path: 'edit-payment/:id', component: EditPaymentPageComponent
    },
    {
      path: 'current-payments', component: CurrentPaymentsPageComponent
    },
    {
      path: 'payment-reports', component: PaymentReportsPageComponent
    }
  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {}
