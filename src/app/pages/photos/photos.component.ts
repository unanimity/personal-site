import { Component, OnInit, OnDestroy } from '@angular/core';
import {PhotosService} from '../../shared/photos.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})






export class PhotosComponent implements OnInit, OnDestroy {

  myConfig = {
    masonry: true,
    masonryMaxHeight: 420,
    masonryGutter: 4,
    counter: false
  };
  page = 0;
  limit = 16;
  constructor(public PhotosService: PhotosService) {
    PhotosService.getPhotos(true);
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroled, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroled, true);
  }



  onScroled(event: any) {

  //  console.log(window.pageYOffset , window.innerHeight);
  /*  this.PhotosService.getPhotos(false, this.limit, this.page);*/
  }

}
