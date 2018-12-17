import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customerServices';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './all-payment-customer.html',
  styleUrls: ['./all-payment-customer.sass']
})
export class CustomerPayementsComponent implements OnInit {
  accessToken;
  data;
  adminRole;
  customerID;
  Amount;
  Payed;
  RemeningAmount;
  constructor(private router: Router, private _customerService: CustomerService ,
    private route: ActivatedRoute) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
    this.route.params.subscribe(params => {
      this.customerID = params['id'];
    });
  }
  ngOnInit() {
   this._customerService.PaymentCustomer(this.customerID, this.accessToken).subscribe((Res: any) => {
     console.log('currentCustomer', Res);
    this.data = Res.customer;
    this.calcCards();
   });
  }
  calcCards() {
    const amountArray = [];
    const payedArray = [];
    for (let index = 0; index < this.data.length; index++) {
      amountArray.push(this.data[index].amount);
      payedArray.push(this.data[index].payed);

    }
    this.Amount = amountArray.reduce((a, b) => a + b, 0);
    console.log(this.Amount);
    this.Payed = payedArray.reduce((a, b) => a + b, 0);
    console.log(this.Payed);
    this.RemeningAmount = this.Amount - this.Payed;

  }
}
