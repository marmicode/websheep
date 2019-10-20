import { createFeatureSelector, createSelector } from '@ngrx/store';
import { urlJoin } from '../../lib/url-join';
import { configFeatureKey, ConfigState } from './config.reducer';

export const config = createFeatureSelector<ConfigState>(configFeatureKey);

export const getApiBasePath = createSelector(
  config,
  _config => _config.apiBasePath
);

export const getApiServerUrl = createSelector(
  config,
  _config => _config.apiServerUrl
);

export const getApiBaseUrl = createSelector(
  getApiServerUrl,
  getApiBasePath,
  (serverUrl, basePath) => urlJoin([serverUrl, basePath])
);
