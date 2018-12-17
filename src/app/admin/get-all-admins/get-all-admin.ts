import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GetAllAdminService} from '../services/get-all-admin-service';

@Component({
  selector: 'app-get-all-admins',
  templateUrl: './get-all-admin.html',
  styleUrls: ['./get-all-admins.sass']
})
export class GetAllAdminPageComponent implements OnInit {
  accessToken;
  data: any;
  adminRole;
  adminID;
  constructor(private router: Router , private _getAllAdmin: GetAllAdminService) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
    this.adminID = sessionStorage.getItem('adminID');
  }
  ngOnInit() {
    if (this.adminRole === 'admin') {
      this._getAllAdmin.GetAllAdmins(this.accessToken).subscribe((res: any) => {
        this.data = res.admins;
        for (let index = 0; index < this.data.length; index++) {
          // tslint:disable-next-line:triple-equals
          if ( this.data[index].adminID == this.adminID) {
            this.data.splice(index, 1);
          }
        }
      });
    }
  }
  onPressDeleteIcon(adminID, i) {

    if (this.adminRole === 'admin') {
      this._getAllAdmin.DeleteAdmin(adminID , this.accessToken).subscribe((res) => {
        this.data.splice(i, 1);
      });
    }
  }
  onPressEditIcon(adminID  ) {
    if (this.adminRole === 'admin') {
      this.router.navigate(['/page/admin/edit-admin/', adminID]);
    }


  }
}
