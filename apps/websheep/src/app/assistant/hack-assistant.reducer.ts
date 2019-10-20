import { Action, createReducer } from '@ngrx/store';
import { Mission } from './mission';
import { Topic } from './topic';

export const assistantFeatureKey = 'assistant';

export interface AssistantState {
  mission: Mission;
  topic: Topic;
}

export const initialState: AssistantState = {
  mission: null,
  topic: null
};

const _assistantReducer = createReducer(initialState);

export function assistantReducer(
  state: AssistantState,
  action: Action
): AssistantState {
  return _assistantReducer(state, action);
}
