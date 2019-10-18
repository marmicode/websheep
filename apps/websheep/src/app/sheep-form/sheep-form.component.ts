import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../reducers';
import * as fromConfig from '../config/config.selectors';

@Component({
  selector: 'ws-sheep-form',
  templateUrl: './sheep-form.component.html',
  styleUrls: ['./sheep-form.component.scss']
})
export class SheepFormComponent implements OnInit {
  sheepForm = new FormGroup({
    name: new FormControl(),
    pictureUri: new FormControl()
  });
  errorMessage$: Observable<string>;
  pictureUriList$ = this._store.select(fromConfig.apiServerUrl).pipe(
    map(apiServerUrl => {
      return Array.from(Array(20).keys()).map(
        i => `${apiServerUrl}/assets/sheep-${i}.jpg`
      );
    })
  );

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {}

  addSheep() {}

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
    MatButtonModule
  ],
  exports: [SheepFormComponent]
})
export class SheepFormModule {}
