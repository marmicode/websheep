import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { Sheep } from '../../sheep-core/sheep';
import { SheepDestinationEmojiPipeModule } from './sheep-destination-emoji.pipe';

@Component({
  selector: 'ws-sheep-preview',
  templateUrl: './sheep-preview.component.html',
  styleUrls: ['./sheep-preview.component.scss']
})
export class SheepPreviewComponent {
  @Input() sheep: Sheep;
}

@NgModule({
  declarations: [SheepPreviewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SheepDestinationEmojiPipeModule,
    FlexModule
  ],
  exports: [SheepPreviewComponent]
})
export class SheepPreviewModule {}
