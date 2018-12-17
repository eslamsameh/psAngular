import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginPageComponent} from './Login-Page/login-page';


const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
