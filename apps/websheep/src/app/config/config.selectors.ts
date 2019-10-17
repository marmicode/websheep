import { createFeatureSelector, createSelector } from '@ngrx/store';
import { urlJoin } from '../helpers/url-join';
import { configFeatureKey, ConfigState } from './config.reducer';

export const config = createFeatureSelector<ConfigState>(configFeatureKey);

export const apiBasePath = createSelector(
  config,
  _config => _config.apiBasePath
);

export const apiServerUrl = createSelector(
  config,
  _config => _config.apiServerUrl
);

export const apiBaseUrl = createSelector(
  apiServerUrl,
  apiBasePath,
  (serverUrl, basePath) => urlJoin([serverUrl, basePath])
);
