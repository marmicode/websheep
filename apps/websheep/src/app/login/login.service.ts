import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { concat, Observable, of } from 'rxjs';
import { map, materialize, tap } from 'rxjs/operators';
import { AppState } from '../reducers';
import { loginSuccess } from '../user/user.actions';
import * as fromConfig from '../config/config.selectors';

export interface Credentials {
  userName: string;
  password: string;
}

export interface TokenResponse {
  id: string;
  token: string;
  userId: string;
}

export enum LoginResult {
  Pending = 'pending',
  Success = 'success',
  Error = 'error'
}

@Injectable({
  providedIn: 'root'
})
export class Login {
  constructor(
    private _httpClient: HttpClient,
    private _store: Store<AppState>
  ) {}

  logIn(credentials: Credentials): Observable<LoginResult> {
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
      of(LoginResult.Pending),
      loginRequest$.pipe(
        materialize(),
        map(notification => {
          return notification.kind === 'E'
            ? LoginResult.Error
            : LoginResult.Success;
        })
      )
    );
  }
}
