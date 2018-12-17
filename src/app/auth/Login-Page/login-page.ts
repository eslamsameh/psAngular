import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/loginService';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.sass']
})
export class LoginPageComponent {
  UserName;
  Password;
  success = false;
  error = false;
  constructor(private router: Router, private _loginService: LoginService) {}
  OnPressLogin() {
    let data;
    data = {
      userName: this.UserName,
      password: this.Password,
      grant_type: 'password'
    };
    this._loginService.Login(data).then((Res: any) => {
      sessionStorage.setItem('AccessToken', Res.access_token);
      const accessToken = Res.access_token;
      this._loginService.getCurrentUser(accessToken).subscribe((res: any) => {
        sessionStorage.setItem('adminID', res.adminId);
        sessionStorage.setItem('adminRole', res.role);
        sessionStorage.setItem('adminName', res.adminName);
        this.success = true;
        setTimeout(() => {
          this.success = false;
          this.router.navigateByUrl('/page/home');
        }, 2000);
      });
    }).catch((fail) => {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 2000);
    });
  }
}
