import { createFeatureSelector, createSelector } from '@ngrx/store';
import { layoutFeatureKey, LayoutState } from './layout.reducer';

export const getLayout = createFeatureSelector<LayoutState>(layoutFeatureKey);

export const getIsHackAssistantOpen = createSelector(
  getLayout,
  layout => layout.isHackAssistantOpen
);
