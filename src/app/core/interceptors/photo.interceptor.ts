import {HttpInterceptorFn} from '@angular/common/http';

export const photoInterceptor: HttpInterceptorFn =
  (req, next) => {
    return next(req);
  };
