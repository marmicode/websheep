import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ws-api-selector',
  templateUrl: './api-selector.component.html',
  styleUrls: ['./api-selector.component.scss']
})
export class ApiSelectorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [ApiSelectorComponent],
  imports: [CommonModule],
  exports: [ApiSelectorComponent]
})
export class ApiSelectorModule {}
