import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-component',
  template: `
  <div *ngIf="this.accessToken !== null">
  <app-header-component></app-header-component>
  <div class="row" style="width: 100%;min-height: 88vh; " >
  <div [ngClass]="sideMenu">
  <app-side-menu  (eventEmitter)="reloadPage($event)"></app-side-menu>
  </div>
  <div [ngClass]="Router">
  <router-outlet></router-outlet>
  </div>
  </div>

<app-footer-component></app-footer-component>
  </div>


  `
})
export class PageComponent implements OnInit {
  toggleSlideNotLess = true;
  sideMenu = 'col-sm-3';
  Router = 'col-sm-9';
  accessToken;
  constructor( ) {
    this.accessToken = sessionStorage.getItem('AccessToken');
    console.log(this.accessToken);

  }

  ngOnInit() {}
  reloadPage(e) {
    if (e === 'Less') {
      this.sideMenu = 'col-sm-1';
      this.Router = 'col-sm-11';
    } else if (e === 'notLess') {
      this.sideMenu = 'col-sm-3';
      this.Router = 'col-sm-9';
    } else {
      this.sideMenu = 'col-2';
      this.Router = 'col-10';
    }
  }
}
