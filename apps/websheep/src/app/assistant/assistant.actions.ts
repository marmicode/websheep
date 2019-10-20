import { createAction, props } from '@ngrx/store';
import { Mission } from './mission';
import { Topic } from './topic';

export const selectTopic = createAction(
  '[Assistant] Select topic',
  props<{
    topic: Topic;
  }>()
);

export const selectMission = createAction(
  '[Assistant] Select mission',
  props<{
    mission: Mission;
  }>()
);
