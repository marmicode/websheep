import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  greetings$: Observable<string>;

  constructor(
    private _farmerService: FarmerService,
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
}
