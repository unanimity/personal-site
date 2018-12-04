import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() {



  }
QR = false;
  onQR() {
    this.QR = !this.QR;
  }
  ngOnInit() {
  }

}
