import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'home', loadChildren: '../Home/home.module#HomeModule' },
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
      {path: 'device', loadChildren: '../devices/device.module#DeviceModule'},
      {path: 'game', loadChildren: '../game/game.module#GameModule'},
      {path: 'customer', loadChildren: '../customer/customer.module#CustomerModule'},
      {path: 'drink', loadChildren: '../drinks/drink.module#DrinkModule'},
      {path: 'hour-price', loadChildren: '../houre-price/hourPrice.module#HourPriceModule'},
      {path: 'print-text', loadChildren: '../print-text/printText.module#PrintTextModule'},
      {path: 'payment', loadChildren: '../payment/payment.module#PaymentModule'},
      {path: 'reservation', loadChildren: '../reservation/reservation.module#ReservationModule'},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting {}
