import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DeviceService} from '../services/device-service';

@Component({
  selector: 'app-get-all-device',
  templateUrl: './get-all-devices.html',
  styleUrls: ['./get-all-devices.sass']
})
export class GetAllDeviceComponent implements OnInit {
  accessToken;
  data;
  adminRole;
  deviceName;
  deviceNameForAdd;
  idForEdit;
  statusForEdit;
  constructor(private router: Router , private _deviceService: DeviceService) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
  }
  ngOnInit() {
    this._deviceService.GetAllDevices(this.accessToken).subscribe((res: any) => {
      this.data = res.devices;
      console.log(this.data);
    });
  }
  onPressDeleteIcon(ID, i ) {
    this._deviceService.DeleteDevice(ID , this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
  onPressEditIcon(ID, status) {

    this.idForEdit = ID;
    this.statusForEdit = status;
  this._deviceService.GetSingleDevice(ID , this.accessToken).subscribe((res: any) => {
    this.deviceName = res.devices[0].deviceName;
  });
  }
  OnPressSubmitToAddDevice() {
    const data = {
      deviceName: this.deviceNameForAdd,
      status: 0
    };
    // tslint:disable-next-line:triple-equals
    if (this.adminRole == 'admin') {
      this._deviceService.AddDevice(data , this.accessToken).subscribe((Res) => {
        this.ngOnInit();
      });
    }
  }
  OnPressNonActive(name, id) {
    const data = {
      deviceName: name,
      deviceID: id,
      status: 0
    };
    this._deviceService.EditDevice(data , this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
  OnPressActive(name, id) {
    const data = {
      deviceName: name,
      deviceID: id,
      status: 1
    };
    this._deviceService.EditDevice(data , this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
  OnPressSubmitForEditDevice() {
    const data = {
      deviceName: this.deviceName,
      deviceID: this.idForEdit,
      status: this.statusForEdit
    };
    this._deviceService.EditDevice(data, this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
}
