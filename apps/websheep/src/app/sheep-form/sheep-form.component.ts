import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { AppState } from '../reducers';
import * as fromConfig from '../config/config.selectors';
import { Destination, Gender } from '../sheep-core/sheep';
import { AddSheepService } from './add-sheep.service';
import { UserFarmService } from './user-farm.service';

@Component({
  selector: 'ws-sheep-form',
  templateUrl: './sheep-form.component.html',
  styleUrls: ['./sheep-form.component.scss']
})
export class SheepFormComponent implements OnInit {
  sheepForm = new FormGroup({
    name: new FormControl('Dolly'),
    age: new FormControl(3),
    gender: new FormControl(Gender.Female),
    eyeColor: new FormControl('blue'),
    farm: new FormGroup({
      id: new FormControl()
    }),
    destinations: new FormControl([Destination.Kebab]),
    pictureUri: new FormControl()
  });

  errorMessage$: Observable<string>;

  farmList$ = this._userFarmService.farmList$.pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  pictureUriList$ = this._store.select(fromConfig.getApiServerUrl).pipe(
    map(apiServerUrl => {
      return Array.from(Array(20).keys()).map(
        i => `${apiServerUrl}/assets/sheep-${i}.jpg`
      );
    })
  );

  constructor(
    private _addSheepService: AddSheepService,
    private _userFarmService: UserFarmService,
    private _store: Store<AppState>
  ) {}

  ngOnInit() {
    this.farmList$
      .pipe(
        filter(farmList => farmList.length > 0),
        map(farmList => farmList[0])
      )
      .subscribe(farm =>
        this.sheepForm.patchValue({
          farm: {
            id: farm.id
          }
        })
      );
  }

  addSheep() {
    this._addSheepService.addSheep({ sheep: this.sheepForm.value }).subscribe();
  }

  selectPictureUri(pictureUri: string) {
    this.sheepForm.patchValue({ pictureUri });
  }
}

@NgModule({
  declarations: [SheepFormComponent],
  imports: [
    CommonModule,
    FlexModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [SheepFormComponent]
})
export class SheepFormModule {}
