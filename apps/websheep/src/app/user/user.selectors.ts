import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from './user.reducer';

export const getUser = createFeatureSelector<UserState>(userFeatureKey);

export const getToken = createSelector(
  getUser,
  user => user.token
);

export const getTokenId = createSelector(
  getUser,
  user => user.tokenId
);

export const getUserId = createSelector(
  getUser,
  user => user.userId
);

export const getIsSignedIn = createSelector(
  getUserId,
  userId => userId != null
);
