import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  @ViewChild('canvas') cn: ElementRef;

constructor()  {


}


  ngAfterViewInit() {




  }
}
