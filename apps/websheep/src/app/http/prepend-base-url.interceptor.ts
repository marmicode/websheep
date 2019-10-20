import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import * as fromConfig from '../config/config.selectors';
import { urlJoin } from '../../lib/url-join';
import { AppState } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class PrependBaseUrlInterceptor implements HttpInterceptor {
  constructor(private _store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const url$ = of(req.url).pipe(
      switchMap(url => {
        if (!url.startsWith('/')) {
          return of(url);
        }

        const apiBaseUrl$ = this._store.select(fromConfig.getApiBaseUrl);

        return apiBaseUrl$.pipe(
          first(),
          map(apiBaseUrl => urlJoin([apiBaseUrl, url]))
        );
      })
    );

    return url$.pipe(
      switchMap(url => {
        return next.handle(req.clone({ url }));
      })
    );
  }
}
