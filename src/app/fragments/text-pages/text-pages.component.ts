import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-pages',
  templateUrl: './text-pages.component.html',
  styleUrls: ['./text-pages.component.css']
})
export class TextPagesComponent implements OnInit {
@Input() Text = '';
public ShowedText = '';
public CurrentPage = 0;
public PageLength = 1250;
   trail = '...';
  constructor() {


  }

  onUpdatePage() {

    this.ShowedText = this.Text.substring(
    this.PageLength * this.CurrentPage,// TODO find `space` cursor
    this.PageLength + this.PageLength * this.CurrentPage) + ((this.CurrentPage * this.PageLength + this.PageLength < (this.Text.length)) ? this.trail : '');

  }
  ngOnInit() {
    this.onUpdatePage();
  }

  onLeft() {
    this.CurrentPage = (this.CurrentPage === 0) ? 0 : this.CurrentPage - 1;
    this.onUpdatePage();
  }
  onRigth() {
    this.CurrentPage =  this.CurrentPage + 1;
    this.onUpdatePage();
  }

}
