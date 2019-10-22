import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { ListResponse } from '../http/list-response';
import { AppState } from '../reducers';
import * as fromUser from '../user/user.selectors';

export interface Farm {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserFarmService {
  farmList$: Observable<Farm[]> = this._store.select(fromUser.getUserId).pipe(
    first(),
    switchMap(userId =>
      this._httpClient.get<ListResponse<Farm>>(`/farmers/${userId}/farms`)
    ),
    map(response => response.items)
  );

  constructor(
    private _httpClient: HttpClient,
    private _store: Store<AppState>
  ) {}
}
