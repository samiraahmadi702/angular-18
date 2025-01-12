import { Component, signal} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {PhotoCardComponent} from '../../../shared/components/photo-card/photo-card.component';
import {NgForOf} from '@angular/common';
import {PhotosService} from '../services/photos.service';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [
    FlexModule,
    PhotoCardComponent,
    NgForOf
  ],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent {

  photos = signal<any[]>([]);

  constructor(private photoService: PhotosService) {
    this.photoService.getPhotos()
      .subscribe((photos) => {
        this.photos.set(photos);
      })
  }
}
