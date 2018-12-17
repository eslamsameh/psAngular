import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HourPriceService {
  constructor(public http: HttpClient) {}
  GetPlayHourPrice(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/playHourPrice/GetplayHourPrice' , {headers: headers} );
  }

   EditPlayHour(EditPlayHour , token) {
    const body = new HttpParams()
    .set('playHourePriceID', EditPlayHour.playHourePriceID)
    .set('hourPlayMulti', EditPlayHour.hourPlayMulti )
    .set('hourPlaysSingle', EditPlayHour.hourPlaysSingle );
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/playHourPrice/editplayHourPrice',  body.toString() , { headers: headers });
  }
}
