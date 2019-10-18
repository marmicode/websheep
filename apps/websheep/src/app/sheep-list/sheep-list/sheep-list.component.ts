import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ws-sheep-list',
  templateUrl: './sheep-list.component.html',
  styleUrls: ['./sheep-list.component.scss']
})
export class SheepListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [SheepListComponent],
  imports: [CommonModule],
  exports: [SheepListComponent]
})
export class SheepListModule {}
