import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit {
@Input() tags: string[];
@Output() tag: EventEmitter<number> = new EventEmitter();


  constructor() {     }

  ngOnInit() {
  }

  chose(index: number) {
    this.tag.emit(index);
  }

}
