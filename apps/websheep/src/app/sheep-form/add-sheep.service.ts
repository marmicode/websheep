import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Sheep } from '../sheep-core/sheep';
import { sheepRouteHelper } from '../views/sheep/sheep-route-helper';

@Injectable({
  providedIn: 'root'
})
export class AddSheepService {
  constructor(private _httpClient: HttpClient, private _router: Router) {}

  addSheep({ sheep }: { sheep: Sheep }) {
    return this._httpClient
      .post<Sheep>('/sheep', sheep)
      .pipe(
        tap(() => this._router.navigate(sheepRouteHelper.sheepListRoute()))
      );
  }
}
