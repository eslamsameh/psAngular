import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-reservation',
  templateUrl: './get-all-reservation.html',
  styleUrls: ['./get-all-reservation.sass']
})
export class GetAllReservationPageComponent {
  constructor(public router: Router) {}
}
