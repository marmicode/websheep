import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { getApiServerUrl } from '../../config/config.selectors';
import { AppState } from '../../reducers';
import { ApiSelectorFormModule } from '../api-selector-form/api-selector-form.component';

@Component({
  selector: 'ws-api-selector',
  templateUrl: './api-selector.component.html',
  styleUrls: ['./api-selector.component.scss']
})
export class ApiSelectorComponent {
  apiServerUrl$ = this._store.select(getApiServerUrl);
  isEditing = false;

  constructor(private _store: Store<AppState>) {}

  edit() {
    this.isEditing = true;
  }

  stopEditing() {
    this.isEditing = false;
  }
}

@NgModule({
  declarations: [ApiSelectorComponent],
  imports: [CommonModule, MatIconModule, FlexModule, ApiSelectorFormModule],
  exports: [ApiSelectorComponent]
})
export class ApiSelectorModule {}
