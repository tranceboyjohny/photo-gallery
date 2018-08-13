import { TestBed, inject } from '@angular/core/testing';

import { PhotosService } from './photos.service';
import { HttpClient } from '@angular/common/http';
describe('PhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosService]
    });
  });

  it('should be created', inject([PhotosService, HttpClient], (service: PhotosService, http: HttpClient) => {
    expect(service).toBeTruthy();
  }));

  it('should return a list of photos', inject([PhotosService, HttpClient], (service: PhotosService, http: HttpClient) => {
    service.getAllPhotos().subscribe(
      photos => {
        expect(photos.length).toBeGreaterThan(0);
      });
  }));
});
