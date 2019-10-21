import { Action, createReducer, on } from '@ngrx/store';
import { selectMission, selectTopic } from './assistant.actions';
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

const _assistantReducer = createReducer(
  initialState,
  on(selectMission, (state, { mission }) => ({ ...state, mission })),
  on(selectTopic, (state, { topic }) => ({ ...state, topic, mission: null }))
);

export function assistantReducer(
  state: AssistantState,
  action: Action
): AssistantState {
  return _assistantReducer(state, action);
}
