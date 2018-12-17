import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CurrentAdminService} from '../services/current-admin';

@Component({
  selector: 'app-my-profile',
  templateUrl: './myProfile.html',
  styleUrls: ['./myProfile.sass']
})
export class MyProfilePageComponent implements OnInit {
  success = false;
  error = false;
  adminName;
  age;
  phone;
  address;
  email;
  password;
  adminId;
  accessToken;
  role;

  constructor(private router: Router, private _currentAdmin: CurrentAdminService) {}
  ngOnInit() {
    this.adminId = sessionStorage.getItem('adminID');
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.role = sessionStorage.getItem('adminRole');
  this._currentAdmin.GetCurrentAdmin(this.adminId, this.accessToken ).subscribe((Res: any) => {
    const data = Res.admin[0];
    this.adminName = data.userName;
    this.age = data.age;
    this.email = data.email;
    this.password = data.password;
    this.phone = data.phone;
    this.address = data.address;
  });
}
onPressSubmit() {
  let data;

  data = {
    address: this.address,
    age: this.age,
    email: this.email,
    password: this.password,
    phone: this.phone,
    userName: this.adminName,
    adminID: this.adminId,
    role: this.role
  };
this._currentAdmin.EditAdmin(data, this.accessToken).subscribe((res: any) => {
  this.success = true;
     setTimeout(() => {
this.success = false;
  }, 2000);
}, caches => ((fail) => {
  this.error = true;
  setTimeout(() => {
this.error = false;
}, 2000);
}));
}
}
