import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from './user.reducer';

export const user = createFeatureSelector<UserState>(userFeatureKey);

export const token = createSelector(
  user,
  _user => _user.token
);

export const isSignedIn = createSelector(
  token,
  _token => _token != null
);

export const tokenId = createSelector(
  user,
  _user => _user.tokenId
);

export const userId = createSelector(
  user,
  _user => _user.userId
);
