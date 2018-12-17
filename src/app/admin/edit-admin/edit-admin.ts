import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {CurrentAdminService} from '../services/current-admin';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.html',
  styleUrls: ['./edit-admin.sass']
})
export class EditAdminPageComponent implements OnInit {
  adminId;
  success = false;
  error = false;
  adminRole;
  accessToken;
  adminName;
  age;
  phone;
  address;
  email;
  password;
  role;
  constructor(private router: Router , private route: ActivatedRoute , private _currentAdmin: CurrentAdminService  ) {
    this.adminRole = sessionStorage.getItem('adminRole');
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.route.params.subscribe(params => {
      this.adminId = params['id'];
    });
  }
  ngOnInit() {
    this._currentAdmin.GetCurrentAdmin(this.adminId , this.accessToken).subscribe((Res: any) => {
      let data;
      data = Res.admin[0];
      this.adminName = data.userName;
      this.age = data.age;
      this.email = data.email;
      this.password = data.password;
      this.phone = data.phone;
      this.role = data.role;
      this.address = data.address;

    });
  }
  onSelectRole(event) {
    this.role = event.target.value;
  }
  OnPressSubmit() {
    let data;
    data = {
      userName: this.adminName,
      adminID: this.adminId,
      age: this.age,
      phone: this.phone,
      password: this.password,
      address: this.address,
      role: this.role,
      email: this.email

    };


    this._currentAdmin.EditAdmin( data , this.accessToken).subscribe((res) => {
      this.success = true;
      setTimeout(() => {
        this.success = false;
        this.router.navigateByUrl('/page/admin/get-all-admins');
      }, 2000);
    });
  }

}
