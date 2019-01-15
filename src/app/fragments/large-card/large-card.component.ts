import {Component, HostListener, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {st} from '@angular/core/src/render3';
import {LargeCardData} from './large-card-data';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.css'],
  animations: [
    trigger('isOpen', [
      // ...
      state('open', style({
        height: '110px',
        opacity: 1,

      })),
      state('closed', style({
        height: '0px',
        opacity: 0,

      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})


export class LargeCardComponent implements OnInit {

  error @Input() card: LargeCardData;



  constructor() { }
  isOpen = false;


  @HostListener('mouseenter')
  onMouseEnter() {
    this.isOpen = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isOpen = false;
  }


  ngOnInit() {
  }

}

