import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(public http: HttpClient) {}
  Login(user) {
    const body = new HttpParams()
      .set('userName', user.userName)
      .set('password', user.password)
      .set('grant_type', 'password');

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });


    return new Promise( (resolve, reject) => {
      this.http.post('http://localhost:51198/token' , body.toString(), {headers: header}).map(res => res)
      .subscribe(
          data => {resolve(data); }
          , err => {
              reject(err);
          });
      });

  }
  getCurrentUser(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/admin/authintication' , {headers: headers} );
  }
}
