import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatExpansionModule, MatListModule } from '@angular/material';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-hack-topic-selector',
  templateUrl: './hack-topic-selector.component.html',
  styleUrls: ['./hack-topic-selector.component.scss']
})
export class HackTopicSelectorComponent implements OnChanges {
  @Input() selectedTopic: string;
  @Input() topics: string[];
  @Output() topicSelect = new EventEmitter<string>();
  isExpanded: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedTopic) {
      this.isExpanded = this.selectedTopic == null;
    }
  }
}

@NgModule({
  declarations: [HackTopicSelectorComponent],
  imports: [CommonModule, MatListModule, MatExpansionModule],
  exports: [HackTopicSelectorComponent]
})
export class HackTopicSelectorModule {}
