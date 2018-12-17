import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CurrentPaymentsService} from '../services/current-payment.service';

@Component({
  selector: 'app-current-payment',
  templateUrl: './current-payment.html',
  styleUrls: ['./current-payment.sass']
})
export class CurrentPaymentsPageComponent implements OnInit {
  accessToken;
  data: any;
  adminRole;
  adminID;
  constructor(private router: Router , private _currentPayments: CurrentPaymentsService ) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
    this.adminID = sessionStorage.getItem('adminID');
  }
  ngOnInit() {
this._currentPayments.GetCurrentPayment(this.accessToken).subscribe((Res: any) => {
  console.log('currentPayment', Res);
  this.data = Res.customer;
});
  }
  onPressAddPayment() {
    this.router.navigateByUrl('/page/payment/add-payment');
  }
  onPressEditIcon(paymentID) {
    this.router.navigate(['/page/payment/edit-payment', paymentID]);
  }
  onPressDeleteIcon(paymentID , deviceID ,  deviceName) {
    this._currentPayments.DeleteCurrentPayment(paymentID, this.accessToken).subscribe((Res) => {
      const data = {
        deviceID: deviceID,
        deviceName: deviceName,
        status: 0
      };
      this._currentPayments.EditDevice(data, this.accessToken).subscribe((Resp: any) => {
        this.ngOnInit();
      });
    });

  }
}
