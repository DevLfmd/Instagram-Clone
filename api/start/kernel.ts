'use strict'

import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { MonoStateFactory } from '../factory/MonoStateFactory';
import { corsConfig } from '../config/cors';
import { bodyParser } from '../config/bodyParser';
import { debug } from 'debug';

import routes from './routes';
import compression from 'compression';
import cors from 'cors';

const app = express();

(async (app) => {
  const { env } = await MonoStateFactory.create('Env');
  const logger = await MonoStateFactory.create('Logger');
  const database = await MonoStateFactory.create('Database');
  
  app.use(compression())
    .use(cors(corsConfig))
    .use(bodyParser)
    .use((err: any, req: Request, res: Response, next: NextFunction) => {
      debug(err.stack);
      res.status(500).send('Ocorreu um erro !');
    })
    .set('db', database)
    .set('logger', logger)
    .set('env', env.parsed)
    .use('/api', routes)
})(app);

export default app;