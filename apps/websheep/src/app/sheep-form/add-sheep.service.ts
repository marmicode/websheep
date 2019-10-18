import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sheep } from '../sheep-core/sheep';

@Injectable({
  providedIn: 'root'
})
export class AddSheepService {
  constructor(private _httpClient: HttpClient) {}

  addSheep({ sheep }: { sheep: Sheep }) {
    return this._httpClient.post<Sheep>('/sheep', sheep);
  }
}
