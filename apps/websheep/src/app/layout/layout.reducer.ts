import { Action, createReducer, on } from '@ngrx/store';
import { hideHackAssistant, showHackAssistant } from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
  isHackAssistantOpen: boolean;
}

export const initialState: LayoutState = {
  isHackAssistantOpen: false
};

const _layoutReducer = createReducer(
  initialState,
  on(showHackAssistant, state => ({ ...state, isHackAssistantOpen: true })),
  on(hideHackAssistant, state => ({ ...state, isHackAssistantOpen: false }))
);

export function layoutReducer(state: LayoutState, action: Action): LayoutState {
  return _layoutReducer(state, action);
}
