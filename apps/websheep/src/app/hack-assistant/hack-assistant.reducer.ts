import { Action, createReducer, on } from '@ngrx/store';
import { Mission } from './mission';
import { Topic } from './topic';
import { hideHackAssistant, showHackAssistant } from './layout.actions';

export const assistantFeatureKey = 'assistant';

export interface AssistantState {
  mission: Mission;
  topic: Topic;
}

export const initialState: AssistantState = {};

const _assistantReducer = createReducer(initialState);

export function assistantReducer(
  state: LayoutState,
  action: Action
): LayoutState {
  return _assistantReducer(state, action);
}
