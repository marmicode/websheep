import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import {
  configFeatureKey,
  configReducer,
  ConfigState
} from '../config/config.reducer';
import { userFeatureKey, userReducer, UserState } from '../user/user.reducer';

export interface AppState {
  [configFeatureKey]: ConfigState;
  [userFeatureKey]: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  config: configReducer,
  user: userReducer
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [configFeatureKey, userFeatureKey],
    rehydrate: true
  })(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];
