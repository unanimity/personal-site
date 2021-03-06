import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../shared/translation/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public menu_item = 0;
  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
}
