import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {DeviceComponent} from './device';
import {GetAllDeviceComponent} from './get-all-devices/get-all-devices';

const routes: Routes = [
  { path: '', component: DeviceComponent,
  children: [
    {
      path: 'get-all-devices', component: GetAllDeviceComponent
    }
  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule {}
