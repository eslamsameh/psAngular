import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-reservation',
  templateUrl: './add-new-reservation.html',
  styleUrls: ['./add-new-reservation.sass']
})
export class AddNewReservationPageComponent {
  constructor(public router: Router) {}
}
