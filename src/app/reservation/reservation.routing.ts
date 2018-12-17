import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ReservationPageComponent} from './reservation.component';
import {AddNewReservationPageComponent } from './add-new-reservation/add-new-reservation';
import {EditReservationPageComponent} from './edit-reservation/edit-reservation';
import {GetAllReservationPageComponent} from './get-all-reservations/get-all-reservation';

const routes: Routes = [
  { path: '', component: ReservationPageComponent,
  children: [
    {
      path: 'add-reservation', component: AddNewReservationPageComponent
    },
    {
      path: 'edit-reservation/:id', component: EditReservationPageComponent
    },
    {
      path: 'get-all-reservations', component: GetAllReservationPageComponent
    }

  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule {}
