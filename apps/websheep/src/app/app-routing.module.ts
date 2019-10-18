import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRouteHelper } from './app-route-helper';
import {
  SigninFormComponent,
  LoginModule
} from './signin/signin-form.component';

export const appRoutes: Routes = [
  {
    path: appRouteHelper.SIGNIN_PATH,
    component: SigninFormComponent
  }
];

@NgModule({
  declarations: [],
  imports: [LoginModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
