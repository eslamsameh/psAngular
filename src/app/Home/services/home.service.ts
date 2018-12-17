import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor(public http: HttpClient) {}
  GetTopCustomer(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/payment/TopCustomer' , {headers: headers} );
  }

  GetDevicePercnt(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/devices/PercentageCalculationForDeviceActicve' , {headers: headers} );
  }

}
