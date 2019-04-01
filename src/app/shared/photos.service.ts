import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface Photo {
  id: string;
  preview: string;
  full: string;
  width: number;
  height: number;
  description: string;
  date: string;
}


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {

  }
public  Photos: Photo[];

  public getPhotos(reinit: boolean= false, page: number= 0, limit: number= 16,  id?: string ) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    if (reinit) {this.Photos = []; }
    return this.http.get(`http://${environment.url}:${environment.port}/api/v${environment.version}/photos${limit ? '?lim=' + limit : ''}${id ? ':id=' + id : ''}${page ? ':page=' + page : ''}`,
      {headers: headers})
      .subscribe(
        (data: Photo[]) => {
          data.map((photo) => {this.Photos.push(photo); });
        },
        (e) => { console.log('Error',  e); },
        () => {

        }
      );

  }
}
