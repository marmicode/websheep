import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { Scavenger } from '@wishtack/rx-scavenger';
import { concat, Observable, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Credentials, Login, LoginResult } from './login.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('karinelemarchand'),
    password: new FormControl('123456')
  });

  errorMessage$: Observable<string>;
  loginResult$: Observable<LoginResult>;

  private _credentialsSubmit$ = new Subject<Credentials>();
  private _scavenger = new Scavenger(this);

  constructor(private _login: Login) {
    this.loginResult$ = this._credentialsSubmit$.pipe(
      /* Login and materialize response so the stream doesn't brake on error. */
      switchMap(credentials => concat(this._login.logIn(credentials))),
      shareReplay({
        bufferSize: 1,
        refCount: true
      })
    );

    /* Map errors to error message. */
    this.errorMessage$ = this.loginResult$.pipe(
      map(result => (result === LoginResult.Error ? 'Login error' : null))
    );
  }

  ngOnInit() {
    this.loginResult$.pipe(this._scavenger.collect()).subscribe();
  }

  ngOnDestroy() {}

  logIn() {
    this._credentialsSubmit$.next(this.loginForm.value);
  }
}

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {}
