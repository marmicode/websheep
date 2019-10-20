import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material';
import {
  HackTopicSelectorModule,
  ItemAndLabel
} from '../hack-topic-selector/hack-topic-selector.component';

export enum Topic {
  Authorization = 'authorization',
  Csrf = 'csrf'
}

export interface Mission {
  title: string;
  topic: Topic;
  goals?: string[];
  hints?: string[];
  // @todo config: Config
}

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

  missions: Mission[] = [
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

  selectedTopic: string;

  selectTopic(topic: Topic) {
    this.selectedTopic = topic;
  }
}

@NgModule({
  declarations: [HackAssistantComponent],
  imports: [CommonModule, HackTopicSelectorModule, MatDividerModule],
  exports: [HackAssistantComponent]
})
export class HackAssistantModule {}
