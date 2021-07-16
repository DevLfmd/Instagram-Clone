'use strict'

import { Request, Response, NextFunction } from 'express';

export class AuthController {
    /**
     * Autenticação
     * @param req 
     * @param res 
     * @param next 
     */
    public async login(req: Request, res: Response, next: NextFunction) {
        console.log((req.app.get('env')))
        res.json({
            status:true,
            id:req.params.id
        });
    };
};