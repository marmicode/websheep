import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Signout } from './auth/signout';
import { getApiBaseUrl } from './config/config.selectors';
import { FarmerService } from './farmer/farmer.service';
import { hideHackAssistant, showHackAssistant } from './layout/layout.actions';
import { getIsHackAssistantOpen } from './layout/layout.selectors';
import { AppState } from './reducers';
import { sheepRouteHelper } from './views/sheep/sheep-route-helper';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentFarmer$ = this._farmerService.currentFarmer$;
  isHackAssistantOpen$ = this._store.select(getIsHackAssistantOpen);
  apiBaseUrl$ = this._store.select(getApiBaseUrl);
  sheepRouteHelper = sheepRouteHelper;
  greetings$: Observable<string>;

  swaggerLogoUri = require('./swagger-logo.png');

  constructor(
    private _farmerService: FarmerService,
    private _store: Store<AppState>,
    private _signout: Signout
  ) {
    this.greetings$ = this.currentFarmer$.pipe(
      map(farmer =>
        farmer ? `Welcome ${farmer.firstName}` : `Welcome to Websheep`
      )
    );
  }

  signOut() {
    this._signout.signOut().subscribe();
  }

  hack() {
    this._store.dispatch(showHackAssistant());
  }

  setIsHackAssistantOpen(isHackAssistantOpen: boolean) {
    this._store.dispatch(
      isHackAssistantOpen ? showHackAssistant() : hideHackAssistant()
    );
  }
}
