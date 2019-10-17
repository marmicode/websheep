import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import * as fromConfig from '../../config/config.selectors';
import { AppState } from '../../reducers';
import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'ws-api-selector-form',
  templateUrl: './api-selector-form.component.html',
  styleUrls: ['./api-selector-form.component.scss']
})
export class ApiSelectorFormComponent implements OnDestroy, OnInit {
  apiServerUrl$ = this._store.select(fromConfig.apiServerUrl);
  apiBasePath$ = this._store.select(fromConfig.apiBasePath);

  apiBaseUrlForm = new FormGroup({
    apiServerUrl: new FormControl(),
    apiBasePath: new FormControl()
  });

  /* ['v1', 'v2', ...] */
  apiBasePathList = Array.from(Array(2).keys()).map(i => `v${i + 1}`);

  private _scavenger = new Scavenger(this);

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    combineLatest([this.apiServerUrl$, this.apiBasePath$])
      .pipe(this._scavenger.collect())
      .subscribe(([apiServerUrl, apiBasePath]) => {
        console.log(apiBasePath);
        this.apiBaseUrlForm.patchValue({
          apiServerUrl,
          apiBasePath
        });
      });
  }

  ngOnDestroy() {}
}

@NgModule({
  declarations: [ApiSelectorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  exports: [ApiSelectorFormComponent]
})
export class ApiSelectorFormModule {}
