/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import { v1Router } from './app/v1';
import { initializeDatabase } from './lib/database';

const app = express();

initializeDatabase();

app.use('/v1', v1Router);
app.get('/', (req, res) => res.redirect('/v1'));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
