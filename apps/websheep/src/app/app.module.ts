import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HackAssistantModule } from './assistant/assistant/assistant.component';
import { AuthEffects } from './auth/auth.effects';
import { AuthInterceptor } from './http/auth.interceptor';
import { PrependBaseUrlInterceptor } from './http/prepend-base-url.interceptor';
import { NavModule } from './nav/nav.component';
import { metaReducers, reducers } from './reducers';
import { ToolbarModule } from './toolbar/toolbar.component';
import { HttpInterceptorsModule } from './http/http-interceptors.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    HttpInterceptorsModule.forRoot(),
    NavModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    FlexModule,
    MatSidenavModule,
    HackAssistantModule,
    ToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
