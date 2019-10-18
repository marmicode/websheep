import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ws-hack-menu',
  templateUrl: './hack-menu.component.html',
  styleUrls: ['./hack-menu.component.scss']
})
export class HackMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [HackMenuComponent],
  imports: [CommonModule],
  exports: [HackMenuComponent]
})
export class HackMenuModule {}
