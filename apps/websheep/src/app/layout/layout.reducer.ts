import { Action, createReducer, on } from '@ngrx/store';
import { hdieHackMenu, showHackMenu } from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
  isHackMenuOpen: boolean;
}

export const initialState: LayoutState = {
  isHackMenuOpen: false
};

const _layoutReducer = createReducer(
  initialState,
  on(showHackMenu, state => ({ ...state, isHackMenuOpen: true })),
  on(hdieHackMenu, state => ({ ...state, isHackMenuOpen: false }))
);

export function layoutReducer(state: LayoutState, action: Action): LayoutState {
  return _layoutReducer(state, action);
}
