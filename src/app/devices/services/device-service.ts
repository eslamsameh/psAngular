import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {
  constructor(public http: HttpClient) {}
  GetAllDevices(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/admin/GetAllDevices' , {headers: headers} );
  }
  DeleteDevice(id , token) {
    const body = new HttpParams()
    .set('deviceID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/admin/RemoveDevice',  body.toString() , { headers: headers });
  }
  AddDevice(device , token) {
    const body = new HttpParams()
    .set('deviceName', device.deviceName)
    .set('status', device.status);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/admin/AddNewDevice',  body.toString() , { headers: headers });
  }
  GetSingleDevice(id , token) {
    const body = new HttpParams()
    .set('deviceID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/admin/GetSingleDevice',  body.toString() , { headers: headers });
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
