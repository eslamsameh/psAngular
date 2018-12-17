
import { NgModule } from '@angular/core';
import { SheredModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import {PagesRouting} from './page.routing';
import {PageComponent} from './page.component';
@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule ,
     SheredModule,
    PagesRouting],
 exports: [
 ]

})
export class PagesModule {}
