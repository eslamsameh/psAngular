import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddAdminService {
  constructor(public http: HttpClient) {}

  addAdmin(user , token) {
    const body = new HttpParams()
    .set('address', user.address)
    .set('age', user.age)
    .set('email', user.email)
    .set('password', user.password)
    .set('phone', user.phone)
    .set('userName', user.userName)
    .set('role', user.role);

    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/admin/addNewUserAdmin',  body.toString() , { headers: headers });
  }

}
