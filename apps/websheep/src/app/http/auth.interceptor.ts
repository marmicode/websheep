import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of, throwError } from 'rxjs';
import { Signout } from '../auth/signout';
import { AppState } from '../reducers';
import * as fromConfig from '../config/config.selectors';
import { signout } from '../user/user.actions';
import * as fromUser from '../user/user.selectors';
import { catchError, first, map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _signout: Signout, private _store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return combineLatest([
      this._store.select(fromConfig.apiBaseUrl).pipe(first()),
      this._store.select(fromUser.token).pipe(first())
    ]).pipe(
      switchMap(([apiBaseUrl, token]) => {
        if (!req.url.startsWith(apiBaseUrl)) {
          return of(req);
        }

        return of(
          req.clone({
            setHeaders: {
              authorization: `Bearer ${token}`
            }
          })
        );
      }),
      switchMap(_req => next.handle(_req)),
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this._store.dispatch(signout());
        }
        return throwError(error);
      })
    );
  }
}
