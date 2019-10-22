import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppState } from '../reducers';

import * as fromUser from '../user/user.selectors';

export interface Farmer {
  id: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  currentFarmer$: Observable<Farmer> = this._store
    .select(fromUser.getUserId)
    .pipe(
      switchMap(userId => {
        if (userId == null) {
          return of(null);
        }
        return this._httpClient.get<Farmer>(`/farmers/${userId}`);
      })
    );

  constructor(
    private _httpClient: HttpClient,
    private _store: Store<AppState>
  ) {}
}
