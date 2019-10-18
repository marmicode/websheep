import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { farmers } from '../fixtures/farmers';
import { farms } from '../fixtures/farms';
import { sheep } from '../fixtures/sheep';

export const database = low(new FileSync('db.json'));

export function initializeDatabase() {
  database
    .defaults({
      farms,
      farmers,
      sheep,
      tokens: []
    })
    .write();
}
