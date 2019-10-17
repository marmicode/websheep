import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from '../reducers';
import { loginSuccess } from '../user/user.actions';

export interface Credentials {
  userName: string;
  password: string;
}

export interface TokenResponse {
  id: string;
  token: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class Login {
  constructor(
    private _httpClient: HttpClient,
    private _store: Store<AppState>
  ) {}

  logIn(credentials: Credentials): Observable<unknown> {
    const apiBaseUrl = 'http://localhost:3333';
    return this._httpClient
      .post<TokenResponse>(`${apiBaseUrl}/tokens`, credentials)
      .pipe(
        tap((tokenResponse: TokenResponse) =>
          this._store.dispatch(
            loginSuccess({
              token: tokenResponse.token,
              tokenId: tokenResponse.id,
              userId: tokenResponse.token
            })
          )
        )
      );
  }
}
