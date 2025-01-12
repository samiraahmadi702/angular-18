import {CanActivateFn} from '@angular/router';

export const detialGurad: CanActivateFn =
  (route, state) => {
    return +route.params['id'] % 2 === 0;
  };
