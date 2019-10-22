import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { appRouteHelper } from '../app-route-helper';
import { AppState } from '../reducers';
import * as fromUser from '../user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {
  constructor(private _router: Router, private _store: Store<AppState>) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._store.select(fromUser.getIsSignedIn).pipe(
      map(isSignedIn => {
        return isSignedIn
          ? true
          : this._router.createUrlTree(appRouteHelper.signinRoute());
      })
    );
  }
}
