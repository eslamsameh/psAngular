import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddPaymentsService } from '../services/add-payment.service';
import {EditPaymentsService} from '../services/edit-payment.service';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.html',
  styleUrls: ['./edit-payment.sass']
})
export class EditPaymentPageComponent implements OnInit {
  accessToken;
  adminRole;
  adminID;
  customers: any;
  visableCustomer = false;
  customerName: any;
  AddCustomer = false;
  customerID: any;
  devices: any;
  Save = false;
  device = {
    deviceName: '',
    deviceID: '',
    status: 0
  };
  game = { gameID: '' , gameName: '' };
  games;
  date;
  startDate;
  EndDate;
  drinks;
  drinkprice = [];
  paymentID;
  arrayOfCurrentDrinks;
  amount;
  Multi;
  playHoure = {
    hourPlayMulti: 0,
    hourPlaysSingle: 0

  };
  currentPlayHour;
  startTimeBeforeSplite;
  RemeningAmount;
  notFinished = true;
  startTimeToSend ;
  Payed;
  resultInMinutes;
  success = false;
  error = false;
  PreviousRemening = 0;
  constructor(private router: Router , private _addPayments: AddPaymentsService ,
     private route: ActivatedRoute , private _EditPayment: EditPaymentsService ) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
    this.adminID = sessionStorage.getItem('adminID');

    this.route.params.subscribe(params => {
      this.paymentID = params['id'];
    });
  }
  ngOnInit() {
    this.getPricePlay();
    this.getCurrentPayment();
    this.getAllDrinksName();
    this.getCurrentDrinks();

  }

  onSelectDevice(event , id) {
    this.device.deviceName = event.target.value;
    this.device.deviceID = id;

  }


  onSave( drinkNameID ) {
    const data = {
      drinkNameID: drinkNameID,
      paymentID: this.paymentID
    };
    this._EditPayment.AddDrink(data , this.accessToken).subscribe((Res) => {
      console.log('addDrink', Res);
     setTimeout(() => {
      this.getCurrentDrinks();
     }, 100);

    });
    console.log(this.drinkprice);
  }


getAllDrinksName() {
  this._addPayments.GetAllDrinksNames(this.accessToken).subscribe((res: any) => {
    this.drinks = res.drinksNames;
    console.log(this.drinks);
  });
}
getCurrentPayment() {
this._EditPayment.GetCurrentPaymentByPaymentID(this.paymentID , this.accessToken).subscribe((Res: any) => {
  let data;
   data = Res.payment[0];
   this.game.gameName = data.gameName;
   this.game.gameID = data.gameID;
   this.device.deviceID = data.deviceID;
   this.device.deviceName = data.deviceName;
   this.startDate = data.startTime.split('T')[1];
   if (data.endTime !== null) {
    this.EndDate = data.endTime.split('T')[1];
   }
   this.startTimeBeforeSplite =  data.startTime;
   this.startTimeToSend = data.startTime;
   this.customerName = data.customerName;
   this.customerID = data.customerID;
   this.date = data.date;
   this.Multi = data.singleOrMulti;
   this.getAllRemaning();

});

}
getCurrentDrinks() {
  this.amount = 0;
  this.drinkprice = [];
  this._EditPayment.GetCurrentDrinkstByPaymentID(this.paymentID , this.accessToken).subscribe((res: any) => {
    this.arrayOfCurrentDrinks = res.drinkName;
    console.log('currentDrinks', this.arrayOfCurrentDrinks);
    for (let index = 0; index < this.arrayOfCurrentDrinks.length; index++) {
     this.drinkprice.push(this.arrayOfCurrentDrinks[index].drinkPrice);
    }

  this.amount = this.drinkprice.reduce((a, b) => a + b, 0);
    setTimeout(() => {
      this.calcDiffTime();
    }, 1000);
  });
}

deleteDrink(drinkID) {
  this._EditPayment.DeleteDrink(drinkID , this.accessToken).subscribe((Res) => {
    console.log(Res);
    this.getCurrentDrinks();
  });
}

getPricePlay() {
this._EditPayment.GetPlayHourPrice(this.accessToken).subscribe((Res: any) => {
  this.playHoure.hourPlayMulti = Res.playHour.hourPlayMulti;
  this.playHoure.hourPlaysSingle = Res.playHour.hourPlaysSingle;
});

}

calcDiffTime() {
  // tslint:disable-next-line:triple-equals
if ( this.Multi == 0) {
  this.currentPlayHour = this.playHoure.hourPlayMulti;
  this.startTimeBeforeSplite = this.startTimeBeforeSplite.replace('T' , ' ');
  this.startTimeBeforeSplite = this.startTimeBeforeSplite.replace(/-/g, '/');
  const startTime = new Date(this.startTimeBeforeSplite);
  const endTime = new Date();
  const difference = endTime.getTime() - startTime.getTime();
  // This will give difference in milliseconds
  const resultInMinutes = Math.round(difference / 60000);
  const firstResult = ( this.currentPlayHour / 60) ;
  const FinalResult = (firstResult * resultInMinutes).toFixed(1);
  // tslint:disable-next-line:radix
  this.amount = this.amount + parseInt( FinalResult);
  const d = new Date(),
  h = (d.getHours() < 10 ? '0'  : '') + d.getHours() ,
  m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  this.EndDate = h + ':' + m;

} else {
  this.currentPlayHour = this.playHoure.hourPlaysSingle;
  this.startTimeBeforeSplite = this.startTimeBeforeSplite.replace('T' , ' ');
  this.startTimeBeforeSplite = this.startTimeBeforeSplite.replace(/-/g, '/');
  const startTime = new Date(this.startTimeBeforeSplite);
  const endTime = new Date();
  const difference = endTime.getTime() - startTime.getTime();
   // This will give difference in milliseconds
  this.resultInMinutes = Math.round(difference / 60000);
  const firstResult = ( this.currentPlayHour / 60) ;
  const FinalResult = (firstResult * this.resultInMinutes).toFixed(1);
  // tslint:disable-next-line:radix
  this.amount = this.amount + parseInt( FinalResult);
  const d = new Date(),
      h = (d.getHours() < 10 ? '0'  : '') + d.getHours() ,
      m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
      this.EndDate = h + ':' + m;
}


}
OnChangePay(event) {
  this.Payed = event.target.value;
        // tslint:disable-next-line:radix
  if (this.amount - parseInt(this.Payed) > 0) {
      // tslint:disable-next-line:radix
    this.RemeningAmount = this.amount - parseInt(this.Payed);

  } else {
    this.RemeningAmount = 0;
  }
}
OnPressFinshTime() {
  // tslint:disable-next-line:triple-equals
  if (this.Payed == '' || this.Payed == null || this.Payed == undefined) {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 1000);

  } else {
    this.startDate = this.date + 'T' + this.startTimeToSend + ':00';
    const EndDate = this.date.split('T')[0];
    this.EndDate = EndDate + 'T' + this.EndDate + ':00';
    const data = {
      customerID: this.customerID,
      startTime: this.startTimeToSend,
      endTime: this.EndDate,
      adminID: this.adminID,
      gameID: this.game.gameID,
      deviceID: this.device.deviceID,
      date: this.date,
      finished: 1,
      // tslint:disable-next-line:radix
      singleOrMulti: parseInt(this.Multi) ,
      payed: this.Payed,
      amount: this.amount,
      RemeningAmount: this.RemeningAmount,
      paymentID: this.paymentID
    };
  console.log(data);
  this._EditPayment.EditPayment(data , this.accessToken).subscribe((Res) => {
  console.log(Res);
  this.device.status = 0;
  this._addPayments.EditDevice(this.device, this.accessToken).subscribe((Resp: any) => {
    console.log(Res);
    this.success = true;
    setTimeout(() => {
      this.success = false;
      this.notFinished = !this.notFinished;
    }, 1000);
   });
  });

  }

}

onPressPrint() {
  window.print();
}

onPressCheckCustomer() {
  this._addPayments.SearchByCustomerPayment(this.accessToken , this.customerName).subscribe((Res: any) => {
    this.customers = Res.customer;
    if ( this.customers.length === 0 ) {
      this.AddCustomer = true;
      this.visableCustomer = false;
      this.Save = true;
    } else {
      this.visableCustomer = true;
      this.AddCustomer = false;
      this.Save = true;
    }
  });

}
onPressCutomerButton(customerName , customerID) {
  this.customerName = customerName;
  this.customerID = customerID;
  this.visableCustomer = false;
}
onPressAddCustomer() {
  const data = {
    customerName: this.customerName
  };
  this._addPayments.AddCustomer(data , this.accessToken).subscribe((Res: any) => {
    this.AddCustomer = false;
    this.customerID = Res.customerID;
  });

}
onPressChangeCustomer() {
  this.startDate = this.date + 'T' + this.startTimeToSend + ':00';
  this.EndDate = this.date + 'T' + this.EndDate + ':00';
  const data = {
    customerID: this.customerID,
    startTime: this.startTimeToSend,
    endTime: this.EndDate,
    adminID: this.adminID,
    gameID: this.game.gameID,
    deviceID: this.device.deviceID,
    date: this.date,
    finished: 0,
    paymentID: this.paymentID

  };
this._EditPayment.EditPayment(data , this.accessToken).subscribe((Res) => {
  this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 2000);
});

}
getAllRemaning() {
  this._EditPayment.GetRemaningForCurrentCustomer(this.customerID, this.accessToken).subscribe((Resp: any) => {
    console.log('currentRemnamenig', Resp);
    const customer = Resp.customer;
   const AllAmountArray = [];
   const AllPayedArray = [];
    for (let index = 0; index < customer.length; index++) {
      AllAmountArray.push(customer[index].amount);
    }
    for (let index = 0; index < customer.length; index++) {
      AllPayedArray.push(customer[index].payed);
    }
    const AllAmount =  AllAmountArray.reduce((a, b) => a + b, 0);
    const AllPayed =  AllPayedArray.reduce((a, b) => a + b, 0);
   this.PreviousRemening = AllAmount - AllPayed ;
  });
}

}


