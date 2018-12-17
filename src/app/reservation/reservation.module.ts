import { ReservationRoutingModule } from './reservation.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// reservation delcelation
import {AddNewReservationPageComponent} from './add-new-reservation/add-new-reservation';
import {ReservationPageComponent} from './reservation.component';
import {EditReservationPageComponent} from './edit-reservation/edit-reservation';
import {GetAllReservationPageComponent} from './get-all-reservations/get-all-reservation';

@NgModule({
  imports: [
    CommonModule,
    ReservationRoutingModule,
     HttpClientModule,
     FormsModule
    ],
  declarations: [
    AddNewReservationPageComponent,
    ReservationPageComponent,
    EditReservationPageComponent,
    GetAllReservationPageComponent
  ],
  providers: [

  ]
})
export class ReservationModule {}
