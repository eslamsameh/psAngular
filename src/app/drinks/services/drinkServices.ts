import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DrinkService {
  constructor(public http: HttpClient) {}
  GetAllDrinks(token) {
    let headers;
     headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:51198/api/drink/GetAllDrinksName' , {headers: headers} );
  }
  DeleteDrink(id , token) {
    const body = new HttpParams()
    .set('drinkNameID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/drink/DeleteDrinkName',  body.toString() , { headers: headers });
  }
  AddDrink(drink , token) {
    const body = new HttpParams()
    .set('drinkName', drink.drinkName)
    .set('drinkPrice', drink.drinkPrice);

    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/drink/addNewDrinkName',  body.toString() , { headers: headers });
  }
  GetSingleDrink(id , token) {
    const body = new HttpParams()
    .set('drinkNameID', id);
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/drink/SingleDrinkName',  body.toString() , { headers: headers });
  }
  EditDrink(drink , token) {
    const body = new HttpParams()
    .set('drinkNameID', drink.drinkNameID)
    .set('drinkName', drink.drinkName )
    .set('drinkPrice', drink.drinkPrice );
    let headers;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 'Bearer ' + token});

    return this.http.post('http://localhost:51198/api/drink/EditDrinkName',  body.toString() , { headers: headers });
  }
}
