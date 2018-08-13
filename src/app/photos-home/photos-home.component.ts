import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotosService } from '../../_service/photos.service';
import { IPhoto } from '../../_models/photo';
import { weddingPhotos } from '../../api/photos/allphotos';
import { NgxImageGalleryComponent, GALLERY_CONF, GALLERY_IMAGE } from 'ngx-image-gallery';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.css'],
  providers: [NgxImageGalleryComponent]
})

export class PhotosHomeComponent implements OnInit {
  loading: boolean;
  storageUrl = 'https://storagejohny.blob.core.windows.net/weddingphotos/Low-Res/';
  thumbnailUrl = 'https://storagejohny.blob.core.windows.net/weddingphotos/Thumbnails/';
  imageSrc = '';

  // get reference to gallery component
  @ViewChild('ngxImageGallery') ngxImageGallery: NgxImageGalleryComponent;

  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    inline: true,
    showDeleteControl: false,
    showImageTitle: false,
    showArrows: true,
    showExtUrlControl: true,
    thumbnailSize: 50,
    reactToMouseWheel: true,
    backdropColor: 'white',
    reactToRightClick: false,
    reactToKeyboard: true
  };

  images: GALLERY_IMAGE[] = weddingPhotos;

  constructor(private photoService: PhotosService) {
  }

  getRandomPhoto(): void {
    const index = Math.floor(Math.random() * 403);
    this.newImage(index);
  }

  getPhotoAtIndex(index: number) {
    this.newImage(index);
  }

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.log('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.log('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.log('Gallery image clicked with index ', index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    console.log('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.log('Delete image at index ', index);
  }

  ngOnInit(): void {
  //   this.photoService.getAllPhotos().subscribe(photos => {
  //     // console.log('running');
  //     photos.forEach(photo => {
  //       const item: GALLERY_IMAGE = {
  //         url: `${this.storageUrl}${photo.url}`,
  //         thumbnailUrl: `${this.thumbnailUrl}${photo.url}`
  //       };
  //       this.images.push(item);
  //     });
  //     // console.log(JSON.stringify(this.images));
  //   });
  // }
  }
}
