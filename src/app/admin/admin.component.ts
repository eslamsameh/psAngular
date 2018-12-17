import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  template: `
  <router-outlet></router-outlet>
  `
})
export class AdminPageComponent {
  constructor(private router: Router) {}
}
