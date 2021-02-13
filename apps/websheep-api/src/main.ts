/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import * as path from 'path';
import { authz1Router } from './app/authz1';
import { authz2Router } from './app/authz2';
import { csrf1Router } from './app/csrf1';
import { csrf2Router } from './app/csrf2';
import { csrf3Router } from './app/csrf3';
import { resetDatabase } from './app/database';
import { jwt1Router } from './app/jwt1';
import { jwt2Router } from './app/jwt2';

process.env.JWT_SECRET = 'MY_AWESOME_UNIQUE_JWT_SECRET';

const app = express();

resetDatabase();

app.use('/authz1', authz1Router);
app.use('/authz2', authz2Router);
app.use('/csrf1', csrf1Router);
app.use('/csrf2', csrf2Router);
app.use('/csrf3', csrf3Router);
app.use('/jwt1', jwt1Router);
app.use('/jwt2', jwt2Router);

app.get('/', (req, res) => res.redirect('/authz1'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

/* Error handler. */
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: err.errors
  });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
