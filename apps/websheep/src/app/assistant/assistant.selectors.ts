import { createFeatureSelector, createSelector } from '@ngrx/store';
import { assistantFeatureKey, AssistantState } from './assistant.reducer';

export const getAssistant = createFeatureSelector<AssistantState>(
  assistantFeatureKey
);

export const getMission = createSelector(
  getAssistant,
  assistant => assistant.mission
);

export const getMissionId = createSelector(
  getMission,
  mission => mission && mission.id
);

export const getTopic = createSelector(
  getAssistant,
  assistant => assistant.topic
);
