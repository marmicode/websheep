import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'ws-sheep-form',
  templateUrl: './sheep-form.component.html',
  styleUrls: ['./sheep-form.component.scss']
})
export class SheepFormComponent implements OnInit {
  sheepForm = new FormGroup({});
  errorMessage$: Observable<string>;

  constructor() {}

  ngOnInit() {}

  addSheep() {}
}

@NgModule({
  declarations: [SheepFormComponent],
  imports: [
    CommonModule,
    FlexModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [SheepFormComponent]
})
export class SheepFormModule {}
