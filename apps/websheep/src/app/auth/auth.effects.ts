import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { appRouteHelper } from '../app-route-helper';
import { signout } from '../user/user.actions';

@Injectable()
export class AuthEffects {
  redirectToSigninForm$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(signout),
        switchMap(() => this._router.navigate(appRouteHelper.signinRoute()))
      ),
    { dispatch: false }
  );

  constructor(private _actions$: Actions, private _router: Router) {}
}
