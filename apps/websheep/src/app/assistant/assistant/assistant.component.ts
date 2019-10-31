import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  HackTopicSelectorModule,
  IdAndLabel
} from '../../../lib/item-selector/item-selector.component';
import { getApiBasePath, getApiBaseUrl } from '../../config/config.selectors';
import { AppState } from '../../reducers';
import { ApiSelectorModule } from '../api-selector/api-selector.component';
import { selectMission, selectTopic } from '../assistant.actions';
import { getMission, getMissionId, getTopic } from '../assistant.selectors';
import { Mission } from '../mission';
import { MissionInfoModule } from '../mission-info/mission-info.component';
import { missionList } from '../mission-list';
import { Topic } from '../topic';

@Component({
  selector: 'ws-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.scss']
})
export class AssistantComponent {
  topicAndLabelList: IdAndLabel[] = [
    {
      id: Topic.BrokenAccessControl,
      label: 'Broken Access Control'
    },
    {
      id: Topic.Csrf,
      label: 'C.S.R.F.'
    },
    {
      id: Topic.Jwt,
      label: 'J.W.T.'
    }
  ];

  missionList: Mission[] = missionList;

  missionIdAndLabelList$: Observable<IdAndLabel[]>;
  topic$ = this._store.select(getTopic);
  mission$ = this._store.select(getMission);
  apiBaseUrl$ = this._store.select(getApiBaseUrl);
  missionId$ = this._store.select(getMissionId);

  constructor(private _store: Store<AppState>) {
    this.missionIdAndLabelList$ = this.topic$.pipe(
      map(topic => {
        return this.missionList
          .filter(mission => mission.topic === topic)
          .map(mission => ({
            label: mission.title,
            id: mission.id
          }));
      })
    );
  }

  selectTopic(topicId: string) {
    this._store.dispatch(selectTopic({ topic: topicId as Topic }));
  }

  selectMissionById(missionId: string) {
    const mission = this.missionList.find(({ id }) => id === missionId);
    this._store.dispatch(selectMission({ mission }));
  }
}

@NgModule({
  declarations: [AssistantComponent],
  imports: [
    CommonModule,
    HackTopicSelectorModule,
    MatDividerModule,
    FlexModule,
    ApiSelectorModule,
    MissionInfoModule
  ],
  exports: [AssistantComponent]
})
export class HackAssistantModule {}
