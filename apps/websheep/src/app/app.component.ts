import { Component } from '@angular/core';
import { Signout } from './auth/signout';
import { sheepRouteHelper } from './views/sheep/sheep-route-helper';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sheepRouteHelper = sheepRouteHelper;

  constructor(private _signout: Signout) {}

  signOut() {
    this._signout.signOut().subscribe();
  }
}
