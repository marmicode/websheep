import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output
} from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppState } from '../reducers';
import * as fromUser from '../user/user.selectors';

@Component({
  selector: 'ws-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() isRightSidenavOpen = false;
  @Output() rightSidenavOpenChange = new EventEmitter<boolean>();

  canToggleSidenav$: Observable<boolean>;
  isHandset$: Observable<boolean> = this._breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isSidenavOpen$: Observable<boolean>;
  isSignedIn$ = this._store.select(fromUser.getIsSignedIn);

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _store: Store<AppState>
  ) {
    /* User can toggle if user is signed in and device is handset. */
    this.canToggleSidenav$ = combineLatest([
      this.isSignedIn$,
      this.isHandset$
    ]).pipe(map(([isSignedIn, isHandset]) => isSignedIn && isHandset));

    /* Sidenav is open if user is signed in and not handset. */
    this.isSidenavOpen$ = combineLatest([
      this.isSignedIn$,
      this.isHandset$
    ]).pipe(map(([isSignedIn, isHandset]) => isSignedIn && !isHandset));
  }
}

@NgModule({
  declarations: [NavComponent],
  exports: [NavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexModule
  ]
})
export class NavModule {}
