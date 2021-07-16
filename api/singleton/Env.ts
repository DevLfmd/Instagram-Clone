'use strict'

import env from 'dotenv';

export class Env {
    private static _instance: Env;
    private env: any;
    
    private constructor() {
        this.env = env.config();
    };

    public static async getInstance(): Promise<Env> {
        return new Promise((resolve, reject) => {
            this._instance = new Env();
            if(!this._instance)
                reject({ msg: 'Erro ao retornar instância de Enviroment.' });
                
            resolve(this._instance);
        });    
    };
};