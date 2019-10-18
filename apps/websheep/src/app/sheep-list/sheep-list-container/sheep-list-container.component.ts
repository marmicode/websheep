import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { SheepListModule } from '../sheep-list/sheep-list.component';
import { UserSheepService } from './user-sheep.service';

@Component({
  selector: 'ws-sheep-list-container',
  templateUrl: './sheep-list-container.component.html',
  styleUrls: ['./sheep-list-container.component.scss']
})
export class SheepListContainerComponent {
  sheepList$ = this._sheepListService
    .getUserSheep()
    .pipe(map(response => response.items));

  constructor(private _sheepListService: UserSheepService) {}
}

@NgModule({
  declarations: [SheepListContainerComponent],
  imports: [CommonModule, SheepListModule],
  exports: [SheepListContainerComponent]
})
export class SheepListContainerModule {}
