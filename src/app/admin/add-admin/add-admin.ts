import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddAdminService } from '../services/add-admin-service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.html',
  styleUrls: ['./add-admin.sass']
})
export class AddAdminPageComponent {
  adminRole;
  accessToken;
  selectedRole;
  adminName;
  age;
  phone;
  address;
  email;
  password;
  success = false;
  error = false;
  constructor(private router: Router, private _addAdmin: AddAdminService) {
    this.adminRole = sessionStorage.getItem('adminRole');
    this.accessToken = sessionStorage.getItem('AccessToken');
    console.log(this.adminName);
  }
  OnSelectRole(e) {
    this.selectedRole = e.target.value;
  }

  OnPressSubmit() {
    let data;
    data = {
      userName: this.adminName,
      age: this.age,
      phone: this.phone,
      email: this.email,
      password: this.password,
      address: this.address,
      role: this.selectedRole
    };
    if (
      // tslint:disable-next-line:triple-equals
      this.adminName == undefined ||
      // tslint:disable-next-line:triple-equals
      this.adminName == '' ||
      // tslint:disable-next-line:triple-equals
      this.email == undefined ||
      // tslint:disable-next-line:triple-equals
      this.email == '' ||
      // tslint:disable-next-line:triple-equals
      this.selectedRole == undefined ||
      // tslint:disable-next-line:triple-equals
      this.password == undefined ||
      // tslint:disable-next-line:triple-equals
      this.password == ''
    ) {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 2000);
    } else {
      if (this.adminRole === 'admin') {
        this._addAdmin.addAdmin(data, this.accessToken).subscribe(Res => {
          this.success = true;
          setTimeout(() => {
            this.success = false;
            this.adminName = '';
            this.age = '';
            this.phone = '';
            this.password = '';
            this.address = '';
            this.email = '';
          }, 2000);
        });
      }
    }
  }
}
