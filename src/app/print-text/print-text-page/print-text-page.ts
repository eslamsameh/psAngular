import { Component , OnInit} from '@angular/core';


@Component({
  selector: 'app-print-text-page',
  templateUrl: './print-text-page.html',
  styleUrls: ['./print-text-page.sass']
})
export class PrintTextPageComponent implements OnInit {
  accessToken;
  adminRole;
  editorDescription;

  constructor() {
    this.accessToken = sessionStorage.getItem('AccessToken');
    this.adminRole = sessionStorage.getItem('adminRole');
  }
  ngOnInit() {

  }


}
