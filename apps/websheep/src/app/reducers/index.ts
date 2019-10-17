import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { userFeatureKey, userReducer, UserState } from '../user/user.reducer';

export interface AppState {
  [userFeatureKey]: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
