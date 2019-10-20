import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ws-hack-topic-selector',
  templateUrl: './hack-topic-selector.component.html',
  styleUrls: ['./hack-topic-selector.component.scss']
})
export class HackTopicSelectorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [HackTopicSelectorComponent],
  imports: [CommonModule],
  exports: [HackTopicSelectorComponent]
})
export class HackTopicSelectorModule {}
