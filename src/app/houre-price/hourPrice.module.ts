import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourPricePageComponent } from './houre-price-page/hour-price';
import {HourPriceService} from './services/hourPriceService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [{ path: '', component: HourPricePageComponent }];

@NgModule({
  declarations: [
    HourPricePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
   RouterModule.forChild(routes)
  ],
  providers: [
    HourPriceService
  ]

})
export class HourPriceModule {}
