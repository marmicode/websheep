import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { concat, Observable, of } from 'rxjs';
import { map, materialize, tap } from 'rxjs/operators';
import { AppState } from '../reducers';
import { loginSuccess } from '../user/user.actions';
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

  logIn(credentials: Credentials): Observable<SigninResult> {
    const loginRequest$ = this._httpClient
      .post<TokenResponse>('/tokens', credentials)
      .pipe(
        tap((tokenResponse: TokenResponse) =>
          this._store.dispatch(
            loginSuccess({
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
