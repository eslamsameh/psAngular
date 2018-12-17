import { Component, Input, Output, EventEmitter , AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent implements AfterViewInit {
  toggleNotLess = true;
   @Output() eventEmitter = new EventEmitter();
   innerHeight;
   innerWidth;
   adminRole;
constructor() {
this.adminRole = sessionStorage.getItem('adminRole');
}
  OnPresstoggleNotLESS() {
this.eventEmitter.emit('notLess');
this.toggleNotLess = !this.toggleNotLess;

  }
  OnPresstoggleLess() {
   if (this.innerWidth < 970) {

    this.toggleNotLess = !this.toggleNotLess;
    this.eventEmitter.emit('LessResponsive');

   } else {

    this.eventEmitter.emit('Less');
    this.toggleNotLess = !this.toggleNotLess;
   }

  }
  ngAfterViewInit() {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 970) {
      this.toggleNotLess = false;
      this.eventEmitter.emit('LessResponsive');

    } else {
      this.toggleNotLess = true;
    }
  }
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    if (event.target.innerWidth < 970) {
      this.toggleNotLess = false;
      this.eventEmitter.emit('LessResponsive');

    } else {
      this.toggleNotLess = true;
      this.eventEmitter.emit('notLess');
    }
  }
}
