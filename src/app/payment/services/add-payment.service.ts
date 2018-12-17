import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddPaymentsService {
  constructor(public http: HttpClient) {}
  GetCurrentPayment(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/payment/GetPaymentsNotFinished' , {headers: headers} );
  }

  GetAllGames(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/Game/GetAllGames' , {headers: headers} );
  }

  SearchByCustomerPayment(token , customerName) {
    const body = new HttpParams()
    .set('customerName', customerName);
    let headers;
     headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});
    return this.http.post('http://localhost:51198/api/customer/SearchByCustomerName' , body.toString() , {headers: headers} );
  }

  AddCustomer(customer , token) {
    const body = new HttpParams()
    .set('CustomerName', customer.customerName);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/customer/addNewCustomer',  body.toString() , { headers: headers });
  }

  GetAllDevices(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/admin/GetDeviceNonActive' , {headers: headers} );
  }

  GetAllDrinksNames(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/drink/GetAllDrinksName' , {headers: headers} );
  }


  DeleteGame(id , token) {
    const body = new HttpParams()
    .set('gameID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/Game/DeleteGame',  body.toString() , { headers: headers });
  }
  AddPayment(payment , token) {
    const body = new HttpParams()
    .set('customerID', payment.customerID)
    .set('startTime', payment.startTime)
    .set('endTime', payment.endTime)
    .set('adminID', payment.adminID)
    .set('gameID', payment.gameID)
    .set('deviceID', payment.deviceID)
    .set('date', payment.date)
    .set('finished', payment.finished)
    .set('singleOrMulti' , payment.singleOrMulti);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/payment/addNewPayment',  body.toString() , { headers: headers });
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

