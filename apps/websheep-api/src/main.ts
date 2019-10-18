/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import * as path from 'path';
import { v1Router } from './app/v1';
import { v2Router } from './app/v2';
import { initializeDatabase } from './app/database';

const app = express();

initializeDatabase();

app.use('/v1', v1Router);
app.use('/v2', v2Router);

app.get('/', (req, res) => res.redirect('/v1'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
