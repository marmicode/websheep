import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { farmers } from '../fixtures/farmers';

export const database = low(new FileSync('db.json'));

export function initializeDatabase() {
  database
    .defaults({
      farmers
    })
    .write();
}
