import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AddAdminPageComponent} from './add-admin/add-admin';
import {EditAdminPageComponent} from './edit-admin/edit-admin';
import {GetAllAdminPageComponent} from './get-all-admins/get-all-admin';
import {AdminPageComponent} from './admin.component';
import {MyProfilePageComponent} from './myProfile/myProfile';

const routes: Routes = [
  { path: '', component: AdminPageComponent,
  children: [
    {
      path: 'add-admin', component: AddAdminPageComponent
    },
    {
      path: 'edit-admin/:id', component: EditAdminPageComponent
    },
    {
      path: 'get-all-admins', component: GetAllAdminPageComponent
    },
    {
      path: 'my-profile', component: MyProfilePageComponent
    }
  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
