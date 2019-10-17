import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromConfig from '../config/config.selectors';
import { AppState } from '../reducers';

@Component({
  selector: 'ws-api-selector',
  templateUrl: './api-selector.component.html',
  styleUrls: ['./api-selector.component.scss']
})
export class ApiSelectorComponent implements OnInit {
  apiBaseUrl$ = this._store.select(fromConfig.apiBaseUrl);
  isEditing = false;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {}

  edit() {
    this.isEditing = true;
  }
}

@NgModule({
  declarations: [ApiSelectorComponent],
  imports: [CommonModule, MatIconModule, FlexModule],
  exports: [ApiSelectorComponent]
})
export class ApiSelectorModule {}
