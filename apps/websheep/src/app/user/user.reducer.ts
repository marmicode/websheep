import { Action, createReducer, on } from '@ngrx/store';
import { signinSuccess, signout } from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  token: string;
  tokenId: string;
  userId: string;
}

export const initialState: UserState = {
  token: null,
  tokenId: null,
  userId: null
};

const _userReducer = createReducer(
  initialState,
  on(signinSuccess, (state, { userId, tokenId, token }) => ({
    ...state,
    userId,
    token,
    tokenId
  })),
  on(signout, () => initialState)
);

export function userReducer(state: UserState, action: Action): UserState {
  return _userReducer(state, action);
}
