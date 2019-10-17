import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiSelectorModule } from '../api-selector/api-selector/api-selector.component';

@Component({
  selector: 'ws-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
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
    FlexModule,
    ApiSelectorModule
  ]
})
export class NavModule {}
