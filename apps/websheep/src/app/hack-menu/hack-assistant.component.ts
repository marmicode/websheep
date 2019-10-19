import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ws-hack-assistant',
  templateUrl: './hack-assistant.component.html',
  styleUrls: ['./hack-assistant.component.scss']
})
export class HackAssistantComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [HackAssistantComponent],
  imports: [CommonModule],
  exports: [HackAssistantComponent]
})
export class HackAssistantModule {}
