import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  HackTopicSelectorModule,
  ItemAndLabel
} from '../../../lib/item-selector/item-selector.component';
import { getApiBaseUrl } from '../../config/config.selectors';
import { AppState } from '../../reducers';
import { ApiSelectorModule } from '../api-selector/api-selector.component';
import { selectMission, selectTopic } from '../assistant.actions';
import { getMission, getTopic } from '../assistant.selectors';
import { Mission } from '../mission';
import { Topic } from '../topic';

@Component({
  selector: 'ws-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.scss']
})
export class AssistantComponent {
  topicAndLabelList: ItemAndLabel<Topic>[] = [
    {
      item: Topic.Authorization,
      label: 'Authorization'
    },
    {
      item: Topic.Csrf,
      label: 'C.S.R.F.'
    }
  ];

  missionList: Mission[] = [
    {
      title: 'Catch a sheep herd',
      topic: Topic.Authorization,
      goals: [`Grab the names of Foo Bar's sheep`],
      hints: [`Foo Bar's user id is "foobar"`],
      config: {
        apiBasePath: 'authz1'
      }
    },
    {
      title: 'Catch a sheep herd',
      topic: Topic.Authorization,
      goals: [`Grab the names of Foo Bar's sheep`],
      hints: [`Admins can see all sheep`],
      config: {
        apiBasePath: 'authz2'
      }
    }
    // {
    //   title: 'Inject a wolf in the herd',
    //   topic: Topic.Csrf,
    //   goals: [`Inject a wolf in the hed`],
    //   hints: [`Foo Bar's user id is "foobar"`]
    // }
  ];

  missionAndLabelList: ItemAndLabel<Mission>[];
  topic$ = this._store.select(getTopic);
  mission$ = this._store.select(getMission);
  apiBaseUrl$ = this._store.select(getApiBaseUrl);

  constructor(private _store: Store<AppState>) {
    this.missionAndLabelList = this.missionList.map(mission => ({
      label: mission.title,
      item: mission
    }));
  }

  selectTopic(topic: Topic) {
    this._store.dispatch(selectTopic({ topic }));
  }

  selectMission(mission: Mission) {
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
    ApiSelectorModule
  ],
  exports: [AssistantComponent]
})
export class HackAssistantModule {}
