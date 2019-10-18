import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { first, switchMap, tap } from 'rxjs/operators';
import { appRouteHelper } from '../app-route-helper';
import { AppState } from '../reducers';
import { signout } from '../user/user.actions';
import * as fromUser from '../user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class Signout {
  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _store: Store<AppState>
  ) {}

  signOut() {
    return this._store.select(fromUser.tokenId).pipe(
      first(),
      switchMap(tokenId => this._httpClient.delete(`/tokens/${tokenId}`)),
      tap(() => this._store.dispatch(signout())),
      tap(() => this._router.navigate(appRouteHelper.signinRoute()))
    );
  }
}
