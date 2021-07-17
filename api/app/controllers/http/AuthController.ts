'use strict'

import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../../../repositories/UserRepository';

export class AuthController {
    /**
     * Autenticação
     * @param req 
     * @param res 
     * @param next 
     */
    public async login(req: Request, res: Response, next: NextFunction) {
        const { db } = req.app.get('db');
        const { login, password } = req.body;

        const repository = new UserRepository(db, 'users');
        const user = await repository.findByCredentials(login, password);
        
        res.json({
            status:true,
            id:req.params.id
        });
    };
};