'use strict'

import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { AuthController } from '../app/controllers/http/AuthController';

const Route = express.Router();

/**
 * Rotas de autenticação
 */
Route.get("/entrar/", async (req: Request, res: Response, next: NextFunction) => (
    await new AuthController()
        .login(req, res, next)
));

export default Route;