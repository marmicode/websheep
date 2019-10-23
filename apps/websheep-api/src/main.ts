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
import { initializeDatabase } from './app/database';

const app = express();

initializeDatabase();

app.use('/authz1', authz1Router);
app.use('/authz2', authz2Router);
app.use('/csrf1', csrf1Router);
app.use('/csrf2', csrf2Router);
app.use('/csrf3', csrf3Router);

app.get('/', (req, res) => res.redirect('/authz1'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

/* Error handler. */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [
      {
        name: err.name,
        message: err.message,
        data: err.data
      }
    ]
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
