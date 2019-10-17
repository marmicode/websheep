/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import { docsRouter } from './app/docs';

const app = express();

app.get('/', (req, res) => res.redirect('/docs'));

app.use('/docs', docsRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
