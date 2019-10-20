import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { Mission } from '../mission';

@Component({
  selector: 'ws-mission-info',
  templateUrl: './mission-info.component.html',
  styleUrls: ['./mission-info.component.scss']
})
export class MissionInfoComponent {
  @Input() mission: Mission;
}

@NgModule({
  declarations: [MissionInfoComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [MissionInfoComponent]
})
export class MissionInfoModule {}
