import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../shared/translation/translate.service';

@Component({
  selector: 'app-set-language',
  templateUrl: './set-language.component.html',
  styleUrls: ['./set-language.component.css']
})
export class SetLanguageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
}
