import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { Sheep } from '../../sheep-core/sheep';

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
  imports: [CommonModule, MatCardModule],
  exports: [SheepPreviewComponent]
})
export class SheepPreviewModule {}
