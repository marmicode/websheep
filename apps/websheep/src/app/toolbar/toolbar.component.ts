import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getApiBaseUrl } from '../config/config.selectors';
import { FarmerService } from '../farmer/farmer.service';
import { showHackAssistant } from '../layout/layout.actions';
import { AppState } from '../reducers';

@Component({
  selector: 'ws-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  apiBaseUrl$ = this._store.select(getApiBaseUrl);
  greetings$: Observable<string>;
  swaggerLogoUri = require('./swagger-logo.png');

  constructor(
    private _farmerService: FarmerService,
    private _store: Store<AppState>
  ) {
    const currentFarmer$ = this._farmerService.currentFarmer$;
    this.greetings$ = currentFarmer$.pipe(
      map(farmer =>
        farmer ? `Welcome ${farmer.firstName}` : `Welcome to Websheep`
      )
    );
  }

  hack() {
    this._store.dispatch(showHackAssistant());
  }
}

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, MatIconModule, FlexModule],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
