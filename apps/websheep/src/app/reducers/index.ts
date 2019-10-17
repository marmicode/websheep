import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
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

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
