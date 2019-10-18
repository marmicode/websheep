import { Component } from '@angular/core';
import { Signout } from './auth/signout';
import { FarmerService } from './farmer/farmer.service';
import { sheepRouteHelper } from './views/sheep/sheep-route-helper';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentFarmer$ = this._farmerService.currentFarmer$;
  sheepRouteHelper = sheepRouteHelper;

  constructor(
    private _farmerService: FarmerService,
    private _signout: Signout
  ) {}

  signOut() {
    this._signout.signOut().subscribe();
  }
}
