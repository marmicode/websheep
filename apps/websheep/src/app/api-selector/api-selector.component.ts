import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
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

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {}
}

@NgModule({
  declarations: [ApiSelectorComponent],
  imports: [CommonModule],
  exports: [ApiSelectorComponent]
})
export class ApiSelectorModule {}
