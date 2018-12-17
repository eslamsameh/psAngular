import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.html',
  styleUrls: ['./edit-reservation.sass']
})
export class EditReservationPageComponent {
  constructor(public router: Router) {}
}
