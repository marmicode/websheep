import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { ListResponse } from '../../http/list-response';
import { AppState } from '../../reducers';
import { Sheep } from '../../sheep-core/sheep';
import * as fromUser from '../../user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserSheepService {
  constructor(
    private _httpClient: HttpClient,
    private _store: Store<AppState>
  ) {}

  getUserSheep(): Observable<ListResponse<Sheep>> {
    return this._store.select(fromUser.userId).pipe(
      first(),
      switchMap(farmerId =>
        this._httpClient.get<ListResponse<Sheep>>(
          `/farmers/${encodeURIComponent(farmerId)}/sheep`
        )
      )
    );
  }
}
