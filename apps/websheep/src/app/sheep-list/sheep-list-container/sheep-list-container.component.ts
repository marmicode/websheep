import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ws-sheep-list-container',
  templateUrl: './sheep-list-container.component.html',
  styleUrls: ['./sheep-list-container.component.scss']
})
export class SheepListContainerComponent implements OnInit {
  sheepList = [];

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [SheepListContainerComponent],
  imports: [CommonModule],
  exports: [SheepListContainerComponent]
})
export class SheepListContainerModule {}
