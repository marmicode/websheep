import { createFeatureSelector, createSelector } from '@ngrx/store';
import { urlJoin } from '../../lib/url-join';
import { configFeatureKey, ConfigState } from './config.reducer';

export const getConfig = createFeatureSelector<ConfigState>(configFeatureKey);

export const getApiBasePath = createSelector(
  getConfig,
  config => config.apiBasePath
);

export const getApiServerUrl = createSelector(
  getConfig,
  config => config.apiServerUrl
);

export const getApiBaseUrl = createSelector(
  getApiServerUrl,
  getApiBasePath,
  (serverUrl, basePath) => urlJoin([serverUrl, basePath])
);

export const getIncludeCredentials = createSelector(
  getConfig,
  config => config.includeCredentials
);
