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
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent<T> implements OnChanges {
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
      this.selectedItemLabel = this._getItemLabel(this.selectedItem);
    }
  }

  private _getItemLabel(item: T) {
    if (item == null || this.itemAndLabelList == null) {
      return null;
    }

    const itemAndLabel = this.itemAndLabelList.find(args => args.item === item);

    return itemAndLabel ? itemAndLabel.label : null;
  }
}

@NgModule({
  declarations: [ItemSelectorComponent],
  imports: [CommonModule, MatListModule, MatExpansionModule],
  exports: [ItemSelectorComponent]
})
export class HackTopicSelectorModule {}
