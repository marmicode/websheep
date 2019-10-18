import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SheepFormComponent } from '../../sheep-form/sheep-form.component';
import { SheepListContainerComponent } from '../../sheep-list/sheep-list-container/sheep-list-container.component';
import { sheepRouteHelper } from './sheep-route-helper';

export const sheepRoutes: Routes = [
  {
    path: sheepRouteHelper.SHEEP_ADD_PATH,
    component: SheepFormComponent
  },
  {
    path: sheepRouteHelper.SHEEP_LIST_PATH,
    component: SheepListContainerComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(sheepRoutes)]
})
export class SheepViewsModule {}
