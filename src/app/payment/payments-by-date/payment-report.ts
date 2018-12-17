import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ReportsPaymentsService} from '../services/reportsPayment.service';

@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.html',
  styleUrls: ['./payment-report.sass']
})
export class PaymentReportsPageComponent implements OnInit {
  accessToken;
  data: any;
  adminRole;
  adminID;
  visiable = false;
  From;
  to;
  amount;
  singleAmount = [];
  RemeningAmount;
  Payed;
  Allpages = [];
  paymentCards = false;
  constructor(private router: Router , private _reportService: ReportsPaymentsService ) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
    this.adminID = sessionStorage.getItem('adminID');
  }
  ngOnInit() {

  }
  onPressSearch() {
    const data = {
      starttime: this.From,
      endtime: this.to
    };

    this._reportService.GetTwoDate(data , this.accessToken ).subscribe((Res: any) => {
      this.visiable = true;
      this.paymentCards = true;
      console.log(Res);
      const dataResponse = Res.payment;
      const remaningAmountArray = [];
      const amountArray = [];
      const payedArray = [];
      for (let index = 0; index < dataResponse.length; index++) {
          amountArray.push(dataResponse[index].amount);
      }
      for (let index = 0; index < dataResponse.length; index++) {
        remaningAmountArray.push(dataResponse[index].RemeningAmount);
      }
      for (let index = 0; index < dataResponse.length; index++) {
        payedArray.push(dataResponse[index].payed);
      }
      this.amount = amountArray.reduce((a, b) => a + b, 0);
      this.Payed = payedArray.reduce((a, b) => a + b, 0);
      this.RemeningAmount = this.amount - this.Payed;
      this.GetPaginationTwoDate();

    });
  }

  GetPaginationTwoDate() {
    this.Allpages = [];
    const data = {
      starttime: this.From,
      endtime: this.to,
      Pagenumber: 0

    };
    this._reportService.GetSingleDatePagination( data , this.accessToken).subscribe((Res: any) => {
      for (let x = 1; x <= Res.NumberOfPages; x++) {
        this.Allpages.push(x);
      }
      this._reportService.GetSingleDataWithPagination(data , this.accessToken).subscribe((resp: any) => {
        this.data = resp.data;
      });
    });
  }
  onPressPage(page) {
    const data = {
      starttime: this.From,
      endtime: this.to,
      Pagenumber: page - 1

    };
    this._reportService.GetSingleDataWithPagination(data , this.accessToken).subscribe((Res: any) => {
      this.data = Res.data;
    });
  }

}
