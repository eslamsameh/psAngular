import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device',
  template: `
  <router-outlet></router-outlet>
  `
})
export class DeviceComponent {
  constructor(private router: Router) {}
}
