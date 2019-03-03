import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TranslateService {

  data: any = {};
  current_leng = 'en';
  constructor(private http: HttpClient) {
  }

  use(lang: string): Promise<{}> {
    this.current_leng = lang;
    return new Promise<{}>((resolve, reject) => {
      const langPath = `i18n/${lang || 'en'}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          console.error(error);
          resolve(this.data);
        }
      );
    });
  }

}
