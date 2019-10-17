import { createAction, props } from '@ngrx/store';

export const loginSuccess = createAction(
  '[User] Login success',
  props<{
    token: string;
    tokenId: string;
    userId: string;
  }>()
);
