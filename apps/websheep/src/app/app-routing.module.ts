import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRouteHelper } from './app-route-helper';
import { LoginComponent, LoginModule } from './login/login.component';

export const appRoutes: Routes = [
  {
    path: appRouteHelper.LOGIN_PATH,
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [LoginModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
