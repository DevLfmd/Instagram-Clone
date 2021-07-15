'use strict'

import { Request, Response, NextFunction } from 'express';

export default class AuthController {
    /**
     * Autenticação
     * @param req 
     * @param res 
     * @param next 
     */
    public async login(req: Request, res: Response, next: NextFunction) {
        console.log('Request URL:', req.originalUrl)
        res.json({
            status:true,
            id:req.params.id
        });
    };
};