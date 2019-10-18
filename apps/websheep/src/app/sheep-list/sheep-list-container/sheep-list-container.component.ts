import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, shareReplay } from 'rxjs/operators';
import { SheepListModule } from '../sheep-list/sheep-list.component';
import { UserSheepService } from './user-sheep.service';

@Component({
  selector: 'ws-sheep-list-container',
  templateUrl: './sheep-list-container.component.html',
  styleUrls: ['./sheep-list-container.component.scss']
})
export class SheepListContainerComponent {
  sheepList$ = this._sheepListService.getUserSheep().pipe(
    map(response =>
      [...response.items].sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      )
    ),
    shareReplay({
      bufferSize: 1,
      refCount: true
    })
  );

  errorMessage$: Observable<string>;

  constructor(private _sheepListService: UserSheepService) {
    this.errorMessage$ = this.sheepList$.pipe(
      mapTo(null),
      catchError(() => of('Something went wrong!'))
    );
  }
}

@NgModule({
  declarations: [SheepListContainerComponent],
  imports: [CommonModule, SheepListModule, MatFormFieldModule],
  exports: [SheepListContainerComponent]
})
export class SheepListContainerModule {}
