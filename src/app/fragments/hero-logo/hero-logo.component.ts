import { Component, OnInit } from '@angular/core';
import {Logo} from './Logo';
@Component({
  selector: 'app-hero-logo',
  templateUrl: './hero-logo.component.html',
  styleUrls: ['./hero-logo.component.css']
})
export class HeroLogoComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    let logo=new Logo();
    logo.init('myCanvas');
    logo.test();


  }

}
