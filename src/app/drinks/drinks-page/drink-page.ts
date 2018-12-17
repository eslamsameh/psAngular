import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DrinkService} from '../services/drinkServices';

@Component({
  selector: 'app-game',
  templateUrl: './drink-page.html',
  styleUrls: ['./drink-page.sass']
})
export class DrinkPageComponent implements OnInit {
  accessToken;
  data;
  adminRole;
  drinkName;
  drinkNameForAdd;
  idForEdit;
  drinkpriceForAdd;
  drinkprice;
  drinkNameForEdit;
  drinkpriceForEdit;
  constructor(private router: Router , private _drinkService: DrinkService) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
  }
  ngOnInit() {
    this._drinkService.GetAllDrinks(this.accessToken).subscribe((res: any) => {
      this.data = res.drinksNames;
      console.log(this.data);
    });
  }
  onPressDeleteIcon(ID, i ) {
    this._drinkService.DeleteDrink(ID , this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
  onPressEditIcon(ID, price) {
    this.idForEdit = ID;

  this._drinkService.GetSingleDrink(ID , this.accessToken).subscribe((res: any) => {
    this.drinkName = res.drinkName[0].drinkName;
    this.drinkpriceForEdit = res.drinkName[0].drinkPrice;
  });
  }
  OnPressSubmitToAddDrink() {
    const data = {
      drinkName: this.drinkNameForAdd,
      drinkPrice: this.drinkpriceForAdd
    };
    console.log(data);
    // tslint:disable-next-line:triple-equals
    if (this.adminRole == 'admin') {
      this._drinkService.AddDrink(data , this.accessToken).subscribe((Res) => {
        this.ngOnInit();
      });
    }
  }

  OnPressSubmitForEditDrink() {
    const data = {
      drinkName: this.drinkName,
      drinkNameID: this.idForEdit,
      drinkPrice: this.drinkpriceForEdit
    };

    this._drinkService.EditDrink(data, this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
}
