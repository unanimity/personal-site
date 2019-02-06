import { Component, OnInit } from '@angular/core';
import {IMasonryGalleryImage} from 'ngx-masonry-gallery';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private urls: string[] = [
    'http://www.sk-project.ru/images/photos/1.JPG',
    'http://www.sk-project.ru/images/photos/2.JPG',
    'http://www.sk-project.ru/images/photos/3.JPG',
    'http://www.sk-project.ru/images/photos/4.JPG',
    'http://www.sk-project.ru/images/photos/5.JPG',
    'http://www.sk-project.ru/images/photos/6.JPG',
    'http://www.sk-project.ru/images/photos/7.JPG',
    'http://www.sk-project.ru/images/photos/8.JPG',
    'http://www.sk-project.ru/images/photos/9.JPG',
    'http://www.sk-project.ru/images/photos/10.JPG',
    'http://www.sk-project.ru/images/photos/11.JPG',
    'http://www.sk-project.ru/images/photos/12.JPG',
    'http://www.sk-project.ru/images/photos/13.JPG',
    'http://www.sk-project.ru/images/photos/14.JPG',
    'http://www.sk-project.ru/images/photos/15.JPG',
    'http://www.sk-project.ru/images/photos/16.JPG',
    'http://www.sk-project.ru/images/photos/17.JPG',
    'http://www.sk-project.ru/images/photos/18.JPG',
    'http://www.sk-project.ru/images/photos/19.JPG',
    'http://www.sk-project.ru/images/photos/20.JPG',
    'http://www.sk-project.ru/images/photos/21.JPG'

  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }
}
