import { Component , OnInit} from '@angular/core';
import {HourPriceService} from '../services/hourPriceService';

@Component({
  selector: 'app-home-page',
  templateUrl: './hour.price.html',
  styleUrls: ['./hour.price.sass']
})
export class HourPricePageComponent implements OnInit {
  singlePlay;
  MultiPlay;
accessToken;
adminRole;
error = false;
success = false;
playHourePriceID;
  constructor( private _hourPriceService: HourPriceService) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
  }
  ngOnInit() {
  this._hourPriceService.GetPlayHourPrice(this.accessToken).subscribe((Res: any) => {
      this.singlePlay = Res.playHour.hourPlaysSingle;
     this.MultiPlay = Res.playHour.hourPlayMulti;
     this.playHourePriceID = Res.playHour.playHourePriceID;
});
  }
  OnPressSubmit() {
    const data = {
      playHourePriceID: this.playHourePriceID,
      hourPlaysSingle: this.singlePlay,
      hourPlayMulti: this.MultiPlay
    };
    // tslint:disable-next-line:triple-equals
    if (this.adminRole == 'admin') {
      this._hourPriceService.EditPlayHour(data , this.accessToken).subscribe((Res) => {
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 2000);
      });
    }
  }
}
