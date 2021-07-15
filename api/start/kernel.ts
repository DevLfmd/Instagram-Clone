import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { MongoError } from 'mongodb';
import { Database } from '../singleton/Database';
import { corsConfig } from '../config/cors';
import { bodyParser } from '../config/bodyParser';
import { debug } from 'debug';
import routes from './routes';
import compression from 'compression';
import cors from 'cors';

const app = express();
const env = require('dotenv').config();

app.use(compression());
app.use(cors(corsConfig));
app.use(bodyParser);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  debug(err.stack);
  res.status(500).send('Something broke!');
});

Database.getInstance({ dbName: env.DB_DATABASE, username: env.DB_USER })
    .then((dbi: Database) => { app.set('db', dbi); })
    .catch((error: MongoError ) => debug(`${error}`));

app.use('/api', routes);

export default app;