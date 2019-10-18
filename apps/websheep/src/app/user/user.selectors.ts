import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from './user.reducer';

export const user = createFeatureSelector<UserState>(userFeatureKey);

export const isSignedIn = createSelector(
  user,
  _user => _user.token != null
);

export const tokenId = createSelector(
  user,
  _user => _user.tokenId
);

export const userId = createSelector(
  user,
  _user => _user.userId
);
