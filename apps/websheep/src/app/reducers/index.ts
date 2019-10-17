import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { userFeatureKey, userReducer, UserState } from '../user/user.reducer';

export interface State {
  [userFeatureKey]: UserState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
