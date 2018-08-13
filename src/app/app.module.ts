import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PhotosHomeComponent } from './photos-home/photos-home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { KeysPipe } from '../_pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotosHomeComponent,
    AppFooterComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgxImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
