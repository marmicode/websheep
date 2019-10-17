import { Action, createReducer, on } from '@ngrx/store';
import { selectApiBasePath, selectApiServerUrl } from './config.actions';

export const configFeatureKey = 'config';

export interface ConfigState {
  apiBasePath: string;
  apiServerUrl: string;
}

export const initialState: ConfigState = {
  apiBasePath: 'v1',
  apiServerUrl: 'http://localhost:3333'
};

const _configReducer = createReducer(
  initialState,
  on(selectApiBasePath, (state, { apiBasePath }) => ({
    ...state,
    apiBasePath
  })),
  on(selectApiServerUrl, (state, { apiServerUrl }) => ({
    ...state,
    apiServerUrl
  }))
);

export function configReducer(state: ConfigState, action: Action): ConfigState {
  return _configReducer(state, action);
}
