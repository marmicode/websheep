import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ws-sheep-form',
  templateUrl: './sheep-form.component.html',
  styleUrls: ['./sheep-form.component.scss']
})
export class SheepFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [SheepFormComponent],
  imports: [CommonModule],
  exports: [SheepFormComponent]
})
export class SheepFormModule {}
