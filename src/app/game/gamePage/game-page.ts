import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GameService} from '../services/gameService';

@Component({
  selector: 'app-game',
  templateUrl: './game-page.html',
  styleUrls: ['./game-page.sass']
})
export class GamePageComponent implements OnInit {
  accessToken;
  data;
  adminRole;
  gameName;
  gameNameForAdd;
  idForEdit;
  constructor(private router: Router , private _gameService: GameService) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
  }
  ngOnInit() {
    this._gameService.GetAllGames(this.accessToken).subscribe((res: any) => {
      this.data = res.game;
      console.log(this.data);
    });
  }
  onPressDeleteIcon(ID, i ) {
    this._gameService.DeleteGame(ID , this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
  onPressEditIcon(ID, status) {

    this.idForEdit = ID;
  this._gameService.GetSingleGame(ID , this.accessToken).subscribe((res: any) => {
    this.gameName = res.game[0].gameName;
  });
  }
  OnPressSubmitToAddGame() {
    const data = {
      gameName: this.gameNameForAdd,
    };
    console.log(data);
    // tslint:disable-next-line:triple-equals
    if (this.adminRole == 'admin') {
      this._gameService.AddGame(data , this.accessToken).subscribe((Res) => {
        this.ngOnInit();
      });
    }
  }

  OnPressSubmitForEditGame() {
    const data = {
      gameName: this.gameName,
      gameID: this.idForEdit,
    };
    this._gameService.EditGame(data, this.accessToken).subscribe((Res) => {
      this.ngOnInit();
    });
  }
}
