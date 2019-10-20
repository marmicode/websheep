/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import * as path from 'path';
import { authz1Router } from './app/authz1';
import { authz2Router } from './app/authz2';
import { initializeDatabase } from './app/database';

const app = express();

initializeDatabase();

app.use('/authz1', authz1Router);
app.use('/authz2', authz2Router);

app.get('/', (req, res) => res.redirect('/authz1'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
