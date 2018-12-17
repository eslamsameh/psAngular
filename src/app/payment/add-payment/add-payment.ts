import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AddPaymentsService} from '../services/add-payment.service';

@Component({
  selector: 'app-get-all-admins',
  templateUrl: './add-payment.html',
  styleUrls: ['./add-payment.sass']
})
export class AddPaymentPageComponent implements OnInit {
  accessToken;
  adminRole;
  adminID;
  customers: any;
  visableCustomer = false;
  customerName: any;
  AddCustomer = false;
  customerID: any;
  devices: any;
  device = {
    deviceName: '',
    deviceID: '',
    status: 0
  };
  game = { gameID: '' , gameName: '' };
  games;
  date;
  startDate;
  EndDate;
  error = false;
  success = false;
  Play;
  singOrMulti;

  constructor(private router: Router , private _addPayments: AddPaymentsService ) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
    this.adminID = sessionStorage.getItem('adminID');
  }
  ngOnInit() {
    this.getAllDevices();
    this.getAllGames();
    const currentdate = new Date();
    this.date = currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDate();

  }
  onPressCheckCustomer() {
    this._addPayments.SearchByCustomerPayment(this.accessToken , this.customerName).subscribe((Res: any) => {
      this.customers = Res.customer;
      if ( this.customers.length === 0 ) {
        this.AddCustomer = true;
        this.visableCustomer = false;
      } else {
        this.visableCustomer = true;
        this.AddCustomer = false;
      }
    });

  }
  onPressAddCustomer() {
    const data = {
      customerName: this.customerName
    };
    this._addPayments.AddCustomer(data , this.accessToken).subscribe((Res: any) => {
      this.AddCustomer = false;
      this.customerID = Res.customerID;
    });
  }

  onPressCutomerButton(name , id) {
    this.customerName = name;
    this.customerID = id;
    this.visableCustomer = false;
  }

  onSelectDevice(event , id) {

    this.device.deviceID = id;
    for (let index = 0; index < this.devices.length; index++) {
      // tslint:disable-next-line:triple-equals
      if (this.device.deviceID == this.devices[index].deviceID) {
        this.device.deviceName = this.devices[index].deviceName;
        this.device.status = this.devices[index].status;
      }
    }
  }

  onSelectGame(event , id) {
    this.game.gameName = event.target.value;
    this.game.gameID = id;
    console.log(this.game);
  }

  getAllDevices() {
    this._addPayments.GetAllDevices(this.accessToken).subscribe((res: any) => {
      this.devices = res.device;
      console.log(this.devices);
    });
  }
  getAllGames() {
    this._addPayments.GetAllGames(this.accessToken).subscribe((res: any) => {
      this.games = res.game;
  });
}
OnPressStartPayment() {
  this.startDate = this.date + 'T' + this.startDate + ':00';
  this.EndDate = this.date + 'T' + this.EndDate + ':00';
  const data = {
    customerID: this.customerID,
    startTime: this.startDate,
    endTime: this.EndDate,
    adminID: this.adminID,
    gameID: this.game.gameID,
    deviceID: this.device.deviceID,
    date: this.date,
    finished: 0,
    // tslint:disable-next-line:radix
    singleOrMulti: parseInt(this.singOrMulti) ,
  };
  this.device.status = 1;
  console.log(this.device);
  this._addPayments.AddPayment(data, this.accessToken).subscribe((res: any ) => {

  if (res.status === 'please Enter the Required Data') {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 2000);
  } else {
    this.success = true;
     this._addPayments.EditDevice(this.device, this.accessToken).subscribe((Resp: any) => {
      setTimeout(() => {
        this.success = false;
        this.router.navigateByUrl('/page/payment/current-payments');
      }, 2000);
     });
  }

  });
}



onSelectPlay(value) {
this.singOrMulti = value;
}
}

