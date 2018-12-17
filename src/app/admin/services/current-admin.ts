import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrentAdminService {
  constructor(public http: HttpClient) {}
  GetCurrentAdmin(userid , token) {
    const body = new HttpParams()
    .set('adminID', userid);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/admin/GetCurrentAdmin',  body.toString() , { headers: headers });
  }
  EditAdmin(user , token) {
    const body = new HttpParams()
    .set('address', user.address)
    .set('age', user.age)
    .set('email', user.email)
    .set('password', user.password)
    .set('phone', user.phone)
    .set('userName', user.userName)
    .set('role', user.role)
    .set('adminID', user.adminID);

    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/admin/UpdateAdmin',  body.toString() , { headers: headers });
  }

}
