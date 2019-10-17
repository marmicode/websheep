import { Action, createReducer } from '@ngrx/store';

export const configFeatureKey = 'config';

export interface ConfigState {
  apiBaseUrl: string;
}

export const initialState: ConfigState = {
  apiBaseUrl: null
};

const _configReducer = createReducer(initialState);

export function configReducer(state: ConfigState, action: Action): ConfigState {
  return _configReducer(state, action);
}
