import { createAction, props } from '@ngrx/store';

export const signinSuccess = createAction(
  '[User] Signin success',
  props<{
    token: string;
    tokenId: string;
    userId: string;
  }>()
);

export const signout = createAction('[User] Signout');
