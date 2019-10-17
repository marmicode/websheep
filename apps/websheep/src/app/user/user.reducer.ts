import { Action, createReducer } from '@ngrx/store';

export const userFeatureKey = 'user';

export interface UserState {
  id: string;
}

export const initialState: UserState = {
  id: null
};

const _userReducer = createReducer(initialState);

export function userReducer(state: UserState, action: Action): UserState {
  return _userReducer(state, action);
}
