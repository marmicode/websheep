import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule],
  exports: [LoginComponent]
})
export class LoginModule {}
