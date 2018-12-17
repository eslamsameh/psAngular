import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrentPaymentsService {
  constructor(public http: HttpClient) {}
  GetCurrentPayment(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/payment/GetPaymentsNotFinished' , {headers: headers} );
  }
  DeleteGame(id , token) {
    const body = new HttpParams()
    .set('gameID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/Game/DeleteGame',  body.toString() , { headers: headers });
  }

  DeleteCurrentPayment(id , token) {
    const body = new HttpParams()
    .set('paymentID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/payment/deletePayment',  body.toString() , { headers: headers });
  }

  EditDevice(device , token) {
    const body = new HttpParams()
    .set('deviceID', device.deviceID)
    .set('status', device.status)
    .set('deviceName', device.deviceName );
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/admin/UpdateDevice',  body.toString() , { headers: headers });
  }

}
