import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Login } from './login.service';

@Component({
  selector: 'ws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('karinelemarchand'),
    password: new FormControl('123456')
  });

  constructor(private _login: Login) {}

  ngOnInit() {}

  logIn() {
    this._login.logIn(this.loginForm.value).subscribe();
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
