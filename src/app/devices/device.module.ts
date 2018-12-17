import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DeviceComponent} from './device';
import {DeviceRoutingModule} from './device.routing';
import {GetAllDeviceComponent} from './get-all-devices/get-all-devices';
import {DeviceService} from './services/device-service';


@NgModule({
  imports: [
    CommonModule,
    DeviceRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    DeviceComponent,
    GetAllDeviceComponent
  ],
  providers: [
    DeviceService
  ]
})
export class DeviceModule {}
