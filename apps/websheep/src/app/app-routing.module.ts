import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRouteHelper } from './app-route-helper';
import { IsNotSignedInGuard } from './auth/is-not-signed-in.guard';
import { IsSignedInGuard } from './auth/is-signed-in.guard';
import {
  SigninFormComponent,
  LoginModule
} from './signin/signin-form.component';
import { sheepRouteHelper } from './views/sheep/sheep-route-helper';

export const appRoutes: Routes = [
  {
    path: appRouteHelper.SIGNIN_PATH,
    canActivate: [IsNotSignedInGuard],
    component: SigninFormComponent
  },
  {
    path: sheepRouteHelper.BASE_PATH,
    canActivate: [IsSignedInGuard],
    loadChildren: () =>
      import('./views/sheep/sheep-views.module').then(m => m.SheepViewsModule)
  },
  {
    path: '**',
    redirectTo: sheepRouteHelper.sheepListRoute().join('/')
  }
];

@NgModule({
  declarations: [],
  imports: [LoginModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
