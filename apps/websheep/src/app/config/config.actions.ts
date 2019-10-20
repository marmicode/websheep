import { createAction, props } from '@ngrx/store';
import { ConfigState } from './config.reducer';

export const selectApiServerUrl = createAction(
  '[Config] Select API server URL',
  props<{
    apiServerUrl: string;
  }>()
);

export const selectApiBasePath = createAction(
  '[Config] Select API base path',
  props<{
    apiBasePath: string;
  }>()
);

export const applyConfig = createAction(
  '[Config] Apply config',
  props<{ config: Partial<ConfigState> }>()
);
