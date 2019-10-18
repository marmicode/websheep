import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, switchMap, tap } from 'rxjs/operators';
import { AppState } from '../reducers';
import * as fromUser from '../user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class Signout {
  constructor(
    private _httpClient: HttpClient,
    private _store: Store<AppState>
  ) {}

  signOut() {
    return this._store.select(fromUser.tokenId).pipe(
      first(),
      switchMap(tokenId => this._httpClient.delete(`/tokens/${tokenId}`)),
      tap(() => this._store.dispatch(signout()))
    );
  }
}
