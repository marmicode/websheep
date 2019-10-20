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

export interface ItemAndLabel<T> {
  label: string;
  item: T;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-item-selector',
  templateUrl: './hack-topic-selector.component.html',
  styleUrls: ['./hack-topic-selector.component.scss']
})
export class HackTopicSelectorComponent<T> implements OnChanges {
  @Input() selectedItem: T;
  @Input() itemAndLabelList: ItemAndLabel<T>[];
  @Input() description: string;
  @Input() titlePrefix: string;
  @Output() selectedItemChange = new EventEmitter<T>();
  isExpanded: boolean;
  selectedItemLabel: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedItem) {
      this.isExpanded = this.selectedItem == null;
      this.selectedItemLabel = this.selectedItem
        ? this.itemAndLabelList.find(({ item }) => item === this.selectedItem)
            .label
        : null;
    }
  }
}

@NgModule({
  declarations: [HackTopicSelectorComponent],
  imports: [CommonModule, MatListModule, MatExpansionModule],
  exports: [HackTopicSelectorComponent]
})
export class HackTopicSelectorModule {}
