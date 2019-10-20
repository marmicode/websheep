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

export interface IdAndLabel {
  label: string;
  id: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent implements OnChanges {
  @Input() selectedId: string;
  @Input() idAndLabelList: IdAndLabel[];
  @Input() description: string;
  @Input() titlePrefix: string;
  @Output() selectedIdChange = new EventEmitter<string>();
  isExpanded: boolean;
  selectedLabel: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedId) {
      this.isExpanded = this.selectedId == null;
      this.selectedLabel = this._getItemLabel(this.selectedId);
    }
  }

  private _getItemLabel(id: string) {
    if (id == null || this.idAndLabelList == null) {
      return null;
    }

    const idAndLabel = this.idAndLabelList.find(args => args.id === id);

    return idAndLabel ? idAndLabel.label : null;
  }
}

@NgModule({
  declarations: [ItemSelectorComponent],
  imports: [CommonModule, MatListModule, MatExpansionModule],
  exports: [ItemSelectorComponent]
})
export class HackTopicSelectorModule {}
