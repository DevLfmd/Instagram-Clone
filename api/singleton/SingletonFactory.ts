'use strict'

import { Logger } from './Logger';
import { Database } from './Database';
import { Env } from './Env';
    
export class SingletonFactory {
    public static create(type: string): any {
        return new Promise(async (resolve) => {
            if(type === 'Database') {
                resolve(await Database.getInstance());
            };
                
            if(type === 'Env')
                resolve(await Env.getInstance());

            if(type === 'Logger')
                resolve(await Logger.getInstance());
        });
    };
};