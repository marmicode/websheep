import { createAction, props } from '@ngrx/store';

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
