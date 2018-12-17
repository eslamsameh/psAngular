import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  constructor(public http: HttpClient) {}
  GetAllGames(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/Game/GetAllGames' , {headers: headers} );
  }
  DeleteGame(id , token) {
    const body = new HttpParams()
    .set('gameID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/Game/DeleteGame',  body.toString() , { headers: headers });
  }
  AddGame(game , token) {
    const body = new HttpParams()
    .set('gameName', game.gameName);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/Game/addNewGame',  body.toString() , { headers: headers });
  }

  GetSingleGame(id , token) {
    const body = new HttpParams()
    .set('gameID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/Game/GetCurrentGameSelected',  body.toString() , { headers: headers });
  }
  EditGame(device , token) {
    const body = new HttpParams()
    .set('gameID', device.gameID)
    .set('gameName', device.gameName );
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/Game/UpdateGame',  body.toString() , { headers: headers });
  }
}
