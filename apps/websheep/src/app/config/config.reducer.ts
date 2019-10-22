import { Action, createReducer, on } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { selectMission } from '../assistant/assistant.actions';
import { selectApiBasePath, selectApiServerUrl } from './config.actions';

export const configFeatureKey = 'config';

export interface ConfigState {
  apiBasePath: string;
  apiServerUrl: string;
  includeCredentials: boolean;
}

export const initialState: ConfigState = {
  apiBasePath: 'authz1',
  apiServerUrl: environment.defaultApiServerUrl,
  includeCredentials: false
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
  })),
  on(selectMission, (state, { mission }) => ({
    ...state,
    ...mission.config
  }))
);

export function configReducer(state: ConfigState, action: Action): ConfigState {
  return _configReducer(state, action);
}
