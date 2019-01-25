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
    'https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg',
    'http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg',
    'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg',
    'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg',
    'http://littleguyintheeye.com/wp-content/uploads/2014/08/nature-3.jpg',
    'http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg',
    'https://s1.1zoom.ru/prev2/536/Tigers_Painting_Art_Night_Glance_535374_300x200.jpg'
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }
}
