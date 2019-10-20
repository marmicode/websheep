import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Mission {
  title: string;
  topic: string;
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
  topics = ['Authorization', 'CSRF'];

  missions: Mission[] = [
    {
      title: 'Catch a sheep herd',
      topic: 'Authorization',
      goals: [`Grab the names of Foo Bar's sheep`],
      hints: [`Foo Bar's user id is "foobar"`]
    },
    {
      title: 'Inject a wolf in the herd',
      topic: 'CSRF',
      goals: [`Inject a wolf in the hed`],
      hints: [`Foo Bar's user id is "foobar"`]
    }
  ];
}

@NgModule({
  declarations: [HackAssistantComponent],
  imports: [CommonModule],
  exports: [HackAssistantComponent]
})
export class HackAssistantModule {}
