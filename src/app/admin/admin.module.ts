import { AdminRoutingModule } from './admin.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// admin delcelation
import {AddAdminPageComponent} from './add-admin/add-admin';
import {EditAdminPageComponent} from './edit-admin/edit-admin';
import {GetAllAdminPageComponent} from './get-all-admins/get-all-admin';
import {AdminPageComponent} from './admin.component';
import {MyProfilePageComponent} from './myProfile/myProfile';
// admin services
import {CurrentAdminService} from './services/current-admin';
import {AddAdminService} from './services/add-admin-service';
import {GetAllAdminService} from './services/get-all-admin-service';

@NgModule({
  imports: [
    CommonModule,
     AdminRoutingModule,
     HttpClientModule,
     FormsModule
    ],
  declarations: [
    AddAdminPageComponent,
    EditAdminPageComponent,
    GetAllAdminPageComponent,
    AdminPageComponent,
    MyProfilePageComponent
  ],
  providers: [
    CurrentAdminService,
    AddAdminService,
    GetAllAdminService
  ]
})
export class AdminModule {}
