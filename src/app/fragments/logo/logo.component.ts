import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
public blink = false;
  constructor() {



  }

  ngOnInit() {
    this.blink = true;
    setInterval(() => { this.blink = !this.blink; }, 1000);

  }



}
