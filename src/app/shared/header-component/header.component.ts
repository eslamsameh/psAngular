import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  userAdmin;
  constructor(private router: Router) {
this.userAdmin = sessionStorage.getItem('adminName');
  }
  OnPressLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl('auth/login');
  }
}
