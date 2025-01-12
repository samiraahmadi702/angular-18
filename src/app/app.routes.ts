import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/photos', pathMatch: 'full'},
  {
    path: 'photos',
    loadChildren: () => import('../app/features/photos/photo.route').then(m => m.photoRoute)
  }
  , {
    path: 'favorites',
    loadChildren: () => import('../app/features/favorites/favorite.routes').then(m => m.favoriteRoutes)
  }
];

