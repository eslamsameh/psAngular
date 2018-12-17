import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetAllAdminService {
  constructor(public http: HttpClient) {}
  GetAllAdmins(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/admin/GetAllAdmins' , {headers: headers} );
  }
  DeleteAdmin(userid , token) {
    const body = new HttpParams()
    .set('adminID', userid);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/admin/DeleteAdmin',  body.toString() , { headers: headers });
  }
}
