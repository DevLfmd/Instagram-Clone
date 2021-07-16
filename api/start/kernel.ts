'use strict'

import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { MongoError } from 'mongodb';
import { Singleton } from '../singleton/Singleton';
import { corsConfig } from '../config/cors';
import { bodyParser } from '../config/bodyParser';
import { debug } from 'debug';

import routes from './routes';
import compression from 'compression';
import cors from 'cors';

const app = express();

app.use(compression());
app.use(cors(corsConfig));
app.use(bodyParser);

/**
 * Server error
 */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  debug(err.stack);
  res.status(500).send('Ocorreu um erro !');
});

/**
 * Singleton
 */
Singleton.boot().then(async () => {
  app.set('env', await Singleton.getEnvInstance());
  app.set('db', await Singleton.getDatabaseInstance());
  app.set('logger', await Singleton.getLoggerInstance());
});

app.use('/api', routes);

export default app;