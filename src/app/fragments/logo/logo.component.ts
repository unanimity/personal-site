import {Component, HostListener, OnInit} from '@angular/core';



@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
public blink = false;
private scrolable = false;
  constructor() {


  }

  ngOnInit() {
    this.blink = true;

    setInterval(() => { if (this.scrolable) { this.blink = !this.blink; } else { this.blink = true; } }, 1000);

  }



  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
   //  console.log('Scroll Event', window.pageYOffset);
    this.scrolable = (window.pageYOffset) > 500;
  }


}
