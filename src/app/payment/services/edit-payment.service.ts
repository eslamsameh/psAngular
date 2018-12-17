import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EditPaymentsService {
  constructor(public http: HttpClient) {}


  GetCurrentPaymentByPaymentID(paymentID , token) {
    const body = new HttpParams()
    .set('paymentID', paymentID);
    let headers;
     headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token});
    return this.http.post('http://localhost:51198/api/payment/GetCurrentPayment' , body.toString() , {headers: headers} );
  }

  GetAllGames(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/Game/GetAllGames' , {headers: headers} );
  }

   GetCurrentDrinkstByPaymentID(paymentID , token) {
    const body = new HttpParams()
    .set('paymentID', paymentID);
    let headers;
     headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token});
    return this.http.post('http://localhost:51198/api/drink/GetDrinksByPaymentID' , body.toString() , {headers: headers} );
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
    .set('finished', payment.finished);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/payment/addNewPayment',  body.toString() , { headers: headers });
  }

  EditPayment(payment , token) {
    const body = new HttpParams()
    .set('customerID', payment.customerID)
    .set('startTime', payment.startTime)
    .set('endTime', payment.endTime)
    .set('adminID', payment.adminID)
    .set('gameID', payment.gameID)
    .set('deviceID', payment.deviceID)
    .set('paymentID', payment.paymentID)
    .set('date', payment.date)
    .set('finished', payment.finished)
    .set('singleOrMulti' , payment.singleOrMulti)
    .set('payed' , payment.payed)
    .set('amount' , payment.amount)
    .set('RemeningAmount' , payment.RemeningAmount);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/payment/EditPayment',  body.toString() , { headers: headers });
  }
  AddDrink(drink , token) {
    const body = new HttpParams()
    .set('drinkNameID', drink.drinkNameID)
    .set('paymentID', drink.paymentID);

    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/drink/addNewDrink',  body.toString() , { headers: headers });
  }

  DeleteDrink(drinkID , token) {
    const body = new HttpParams()
    .set('drinkID', drinkID);

    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/drink/DeleteDrink',  body.toString() , { headers: headers });
  }

  GetPlayHourPrice(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/playHourPrice/GetplayHourPrice' , {headers: headers} );
  }

  GetRemaningForCurrentCustomer(customerID , token) {
    const body = new HttpParams()
    .set('customerID', customerID);
    let headers;
     headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token});
    return this.http.post('http://localhost:51198/api/payment/GetRemaningOfCustomer', body.toString(), {headers: headers} );
  }

}

