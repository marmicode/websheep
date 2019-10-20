import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material';
import {
  HackTopicSelectorModule,
  ItemAndLabel
} from '../hack-topic-selector/hack-topic-selector.component';
import { Mission } from '../mission';
import { Topic } from '../topic';

@Component({
  selector: 'ws-hack-assistant',
  templateUrl: './hack-assistant.component.html',
  styleUrls: ['./hack-assistant.component.scss']
})
export class HackAssistantComponent {
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
      hints: [`Foo Bar's user id is "foobar"`]
    },
    {
      title: 'Inject a wolf in the herd',
      topic: Topic.Csrf,
      goals: [`Inject a wolf in the hed`],
      hints: [`Foo Bar's user id is "foobar"`]
    }
  ];

  missionAndLabelList: ItemAndLabel<Mission>[];
  selectedTopic: string;
  selectedMission: Mission;

  constructor() {
    this.missionAndLabelList = this.missionList.map(mission => ({
      label: mission.title,
      item: mission
    }));
  }

  selectTopic(topic: Topic) {
    this.selectedTopic = topic;
  }

  selectMission(mission: Mission) {
    this.selectedMission = mission;
  }
}

@NgModule({
  declarations: [HackAssistantComponent],
  imports: [CommonModule, HackTopicSelectorModule, MatDividerModule],
  exports: [HackAssistantComponent]
})
export class HackAssistantModule {}
