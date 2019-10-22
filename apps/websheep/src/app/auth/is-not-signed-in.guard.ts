import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../reducers';
import * as fromUser from '../user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class IsNotSignedInGuard implements CanActivate {
  constructor(private _store: Store<AppState>) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._store
      .select(fromUser.getIsSignedIn)
      .pipe(map(isSignedIn => !isSignedIn));
  }
}
