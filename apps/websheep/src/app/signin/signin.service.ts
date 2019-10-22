import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { concat, Observable, of } from 'rxjs';
import { first, map, materialize, switchMap, tap } from 'rxjs/operators';
import { getIncludeCredentials } from '../config/config.selectors';
import { AppState } from '../reducers';
import { signinSuccess } from '../user/user.actions';
import { sheepRouteHelper } from '../views/sheep/sheep-route-helper';

export interface Credentials {
  userName: string;
  password: string;
}

export interface TokenResponse {
  id: string;
  token: string;
  userId: string;
}

export enum SigninResult {
  Pending = 'pending',
  Success = 'success',
  Error = 'error'
}

@Injectable({
  providedIn: 'root'
})
export class Signin {
  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _store: Store<AppState>
  ) {}

  signIn(credentials: Credentials): Observable<SigninResult> {
    const loginRequest$ = this._httpClient
      .post<TokenResponse>('/tokens', credentials)
      .pipe(
        tap((tokenResponse: TokenResponse) =>
          this._store.dispatch(
            signinSuccess({
              token: tokenResponse.token,
              tokenId: tokenResponse.id,
              userId: tokenResponse.userId
            })
          )
        )
      );

    return concat(
      of(SigninResult.Pending),
      loginRequest$.pipe(
        tap(() => this._router.navigate(sheepRouteHelper.sheepListRoute())),
        materialize(),
        map(notification => {
          return notification.kind === 'E'
            ? SigninResult.Error
            : SigninResult.Success;
        })
      )
    );
  }
}
