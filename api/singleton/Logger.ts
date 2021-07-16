'use strict'

import { debug } from 'debug';

type Logs = {
    message: string;
    timestamp: string;
}[];

export class Logger {
    private static _instance: Logger;
    private logs: Logs = [];

    private constructor() {
        this.logs = [];
    };
    public static async getInstance(): Promise<Logger> {
        return new Promise((resolve, reject) => {
            this._instance = new Logger();
            if(!this._instance)
                reject({ msg: 'Erro ao retornar instância de Logger.' });
                
            resolve(this._instance);
        });    
    };

    public get count() {
        return this.logs.length;
    };

    public log(message: string) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        debug(`${timestamp} - ${message}`);
    };
};