import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule, Routes } from '@angular/router';

import {DrinkPageComponent} from './drinks-page/drink-page';
import {DrinkService} from './services/drinkServices';

const routes: Routes = [
  { path: '', component: DrinkPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DrinkPageComponent
  ],
  providers: [
    DrinkService
  ]
})
export class DrinkModule {}
