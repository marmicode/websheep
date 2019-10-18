import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule
} from '@angular/core';
import { Sheep } from '../../sheep-core/sheep';
import { SheepPreviewModule } from '../sheep-preview/sheep-preview.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-sheep-list',
  templateUrl: './sheep-list.component.html',
  styleUrls: ['./sheep-list.component.scss']
})
export class SheepListComponent {
  @Input() sheepList: Sheep[];
}

@NgModule({
  declarations: [SheepListComponent],
  imports: [CommonModule, SheepPreviewModule],
  exports: [SheepListComponent]
})
export class SheepListModule {}
