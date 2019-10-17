import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from './user.reducer';

export const user = createFeatureSelector<UserState>(userFeatureKey);

export const isSignedIn = createSelector(
  user,
  _user => _user.token != null
);
