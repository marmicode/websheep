import { Action, createReducer } from '@ngrx/store';

export const configFeatureKey = 'config';

export interface ConfigState {
  apiBasePath: string;
  apiServerUrl: string;
}

export const initialState: ConfigState = {
  apiBasePath: 'v1',
  apiServerUrl: 'http://localhost:3333'
};

const _configReducer = createReducer(initialState);

export function configReducer(state: ConfigState, action: Action): ConfigState {
  return _configReducer(state, action);
}
