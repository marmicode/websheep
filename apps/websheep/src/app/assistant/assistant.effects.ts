import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { applyConfig } from '../config/config.actions';
import { selectMission } from './assistant.actions';

@Injectable()
export class AssistantEffects {
  updateConfigOnMissionChange$ = createEffect(() =>
    this._actions$.pipe(
      ofType(selectMission),
      map(({ mission }) => applyConfig({ config: mission.config }))
    )
  );

  constructor(private _actions$: Actions, private _router: Router) {}
}
