import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import {
  configFeatureKey,
  configReducer,
  ConfigState
} from '../config/config.reducer';
import {
  assistantFeatureKey,
  assistantReducer,
  AssistantState
} from '../assistant/assistant.reducer';
import {
  layoutFeatureKey,
  layoutReducer,
  LayoutState
} from '../layout/layout.reducer';
import { userFeatureKey, userReducer, UserState } from '../user/user.reducer';

export interface AppState {
  [assistantFeatureKey]: AssistantState;
  [configFeatureKey]: ConfigState;
  [layoutFeatureKey]: LayoutState;
  [userFeatureKey]: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  assistant: assistantReducer,
  config: configReducer,
  layout: layoutReducer,
  user: userReducer
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [assistantFeatureKey, configFeatureKey, userFeatureKey],
    rehydrate: true
  })(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];
