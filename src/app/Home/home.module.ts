import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './page/home-page/home-page';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// services
import {DeviceService} from '../devices/services/device-service';
import {HomeService} from './services/home.service';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
   RouterModule.forChild(routes)
  ],
  providers: [
    DeviceService,
    HomeService
  ]

})
export class HomeModule {}
