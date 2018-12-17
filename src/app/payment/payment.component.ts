import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  template: `
  <router-outlet></router-outlet>
  `
})
export class PaymentComponent {
  constructor(private router: Router) {}
}
