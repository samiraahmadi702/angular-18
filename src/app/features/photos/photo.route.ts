import {Routes} from '@angular/router';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {DetailsComponent} from './details/details.component';
import {detialGurad} from './guards/detial-gurad.guard';

export const photoRoute: Routes = [
  {path: '', component: PhotoListComponent},
  {path: ':id', component: DetailsComponent, canActivate: [detialGurad]}
]
