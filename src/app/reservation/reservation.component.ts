import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  template: `
  <router-outlet></router-outlet>
  `
})
export class ReservationPageComponent {
  constructor(private router: Router) {}
}
