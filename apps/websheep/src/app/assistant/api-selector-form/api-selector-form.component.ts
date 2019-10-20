import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  NgModule,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { Store } from '@ngrx/store';
import { Scavenger } from '@wishtack/rx-scavenger';
import { combineLatest } from 'rxjs';
import {
  selectApiBasePath,
  selectApiServerUrl
} from '../../config/config.actions';
import * as fromConfig from '../../config/config.selectors';
import { AppState } from '../../reducers';

@Component({
  selector: 'ws-api-selector-form',
  templateUrl: './api-selector-form.component.html',
  styleUrls: ['./api-selector-form.component.scss']
})
export class ApiSelectorFormComponent implements OnDestroy, OnInit {
  @Output() done = new EventEmitter();

  apiServerUrl$ = this._store.select(fromConfig.getApiServerUrl);

  apiBaseUrlForm = new FormGroup({
    apiServerUrl: new FormControl()
  });

  private _scavenger = new Scavenger(this);

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.apiServerUrl$
      .pipe(this._scavenger.collect())
      .subscribe(apiServerUrl => {
        this.apiBaseUrlForm.patchValue({
          apiServerUrl
        });
      });

    this.apiBaseUrlForm
      .get('apiServerUrl')
      .valueChanges.pipe(this._scavenger.collect())
      .subscribe(apiServerUrl => {
        this._store.dispatch(selectApiServerUrl({ apiServerUrl }));
      });
  }

  ngOnDestroy() {}

  close() {
    this.done.emit();
  }
}

@NgModule({
  declarations: [ApiSelectorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    FlexModule
  ],
  exports: [ApiSelectorFormComponent]
})
export class ApiSelectorFormModule {}
