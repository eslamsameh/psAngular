import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
  constructor(public http: HttpClient) {}
  GetAllCustomer(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/customer/GetAllCustomer' , {headers: headers} );
  }
  DeleteCustomer(id , token) {
    const body = new HttpParams()
    .set('customerID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/customer/DeleteCustomer',  body.toString() , { headers: headers });
  }
  AddCustomer(customer , token) {
    const body = new HttpParams()
    .set('CustomerName', customer.customerName);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/customer/addNewCustomer',  body.toString() , { headers: headers });
  }
  GetSingleCustomer(id , token) {
    const body = new HttpParams()
    .set('customerID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/customer/GetSingleCustomer',  body.toString() , { headers: headers });
  }

  PaymentCustomer(id , token) {
    const body = new HttpParams()
    .set('customerID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/payment/GetPaymentByCustomer',  body.toString() , { headers: headers });
  }

  EditCustomer(customer , token) {
    const body = new HttpParams()
    .set('customerID', customer.customerID)
    .set('customerName', customer.customerName );
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/customer/UpdateCustomer',  body.toString() , { headers: headers });
  }
}
