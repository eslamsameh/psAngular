import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CustomerService} from '../services/customerServices';

@Component({
  selector: 'app-game',
  templateUrl: './customer-page.html',
  styleUrls: ['./customer-page.sass']
})
export class CustomerPageComponent implements OnInit {
  accessToken;
  data;
  adminRole;
  CustomerName;
  CustomerNameForAdd;
  idForEdit;
  constructor(private router: Router , private _customerService: CustomerService) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
  }
  ngOnInit() {
    this._customerService.GetAllCustomer(this.accessToken).subscribe((res: any) => {
      this.data = res.customer;
      console.log(this.data);
    });
  }
  onPressDeleteIcon(ID, i ) {
    this._customerService.DeleteCustomer(ID , this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
  onPressEditIcon(ID, status) {
    this.idForEdit = ID;
  this._customerService.GetSingleCustomer(ID , this.accessToken).subscribe((res: any) => {
    this.CustomerName = res.customer[0].customerName;
  });
  }
  OnPressSubmitToAddCustomer() {
    const data = {
      customerName: this.CustomerNameForAdd,
    };
    console.log(data);

      this._customerService.AddCustomer(data , this.accessToken).subscribe((Res) => {
        this.ngOnInit();
      });

  }

  OnPressSubmitForEditCustomer() {
    const data = {
      customerName: this.CustomerName,
      customerID: this.idForEdit,
    };
    this._customerService.EditCustomer(data, this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
  OnPressCustomer(customerID) {
   this.router.navigate(['/page/customer/paymentCustomer', customerID]);
  }
}
