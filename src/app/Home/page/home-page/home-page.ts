import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../devices/services/device-service';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.sass']
})
export class HomePageComponent implements OnInit {
  accessToken;
  data;
  adminRole;
  deviceName;
  deviceNameForAdd;
  idForEdit;
  statusForEdit;
  topCustomer;
  DevicePernt;
  constructor(private _deviceService: DeviceService , private _homeService: HomeService) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
  }
  ngOnInit() {
    this._deviceService.GetAllDevices(this.accessToken).subscribe((res: any) => {
      this.data = res.devices;
      console.log(this.data);
    });
    this._homeService.GetTopCustomer(this.accessToken).subscribe((Rs: any ) => {
      console.log(Rs);
      this.topCustomer = Rs.customer[0].customerName;
    });
    this._homeService.GetDevicePercnt(this.accessToken).subscribe((Res: any) => {
      this.DevicePernt = Res.data;
    });

  }

}

