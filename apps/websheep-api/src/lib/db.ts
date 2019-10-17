import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

export const database = low(new FileSync('db.json'));

export function initializeDatabase() {
  database
    .defaults({
      farmers: require('../fixtures/farmers.json')
    })
    .write();
}
