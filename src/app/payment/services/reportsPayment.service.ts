import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ReportsPaymentsService {
  constructor(public http: HttpClient) {}


  GetTwoDate(data , token) {
    let headers;
    const body = new HttpParams()
    .set('starttime', data.starttime)
    .set('endtime', data.endtime);
     headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});
    return this.http.post('http://localhost:51198/api/report/AllPaymentByTwoDate' , body.toString(), {headers: headers} );
  }

  GetSingleDate(data , token) {
    let headers;
    const body = new HttpParams()
    .set('date', data.starttime);
     headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});
    return this.http.post('http://localhost:51198/api/report/AllPaymentByOneDate' , body.toString(), {headers: headers} );
  }
  GetSingleDatePagination(data , token) {
    let headers;
    const body = new HttpParams()
    .set('starttime', data.starttime)
    .set('endtime', data.endtime);
     headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});
    return this.http.post('http://localhost:51198/api/admin/NumberOfPageTwoDate' , body.toString(), {headers: headers} );
  }

  GetSingleDataWithPagination( data , token) {
    let headers;
    const body = new HttpParams()
    .set('starttime', data.starttime)
    .set('Pagenumber', data.Pagenumber)
    .set('endtime', data.endtime);
     headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});
    return this.http.post('http://localhost:51198/api/admin/GotoPageTwoDate' , body.toString(), {headers: headers} );
  }



}

