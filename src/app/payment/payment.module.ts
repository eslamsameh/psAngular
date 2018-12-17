import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentRoutingModule } from './payment.routing';
// payment delcelation
import {AddPaymentPageComponent} from './add-payment/add-payment';
import {CurrentPaymentsPageComponent} from './current-payment/current-payment';
import {EditPaymentPageComponent } from './edit-payment/edit-payment';
import {PaymentReportsPageComponent} from './payments-by-date/payment-report';
import {PaymentComponent} from './payment.component';
// payment services
import {CurrentPaymentsService} from './services/current-payment.service';
import {AddPaymentsService} from './services/add-payment.service';
import {EditPaymentsService} from './services/edit-payment.service';
import {ReportsPaymentsService} from './services/reportsPayment.service';


@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
     HttpClientModule,
     FormsModule
    ],
  declarations: [
    AddPaymentPageComponent,
    CurrentPaymentsPageComponent,
    EditPaymentPageComponent,
    PaymentReportsPageComponent,
    PaymentComponent
  ],
  providers: [
    CurrentPaymentsService,
    AddPaymentsService,
    EditPaymentsService,
    ReportsPaymentsService
  ]
})
export class PaymentModule {}
