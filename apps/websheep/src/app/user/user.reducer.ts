import { Action, createReducer, on } from '@ngrx/store';
import { loginSuccess } from './user.actions';

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
  on(loginSuccess, (state, { userId, tokenId, token }) => ({
    ...state,
    userId,
    token,
    tokenId
  }))
);

export function userReducer(state: UserState, action: Action): UserState {
  return _userReducer(state, action);
}
