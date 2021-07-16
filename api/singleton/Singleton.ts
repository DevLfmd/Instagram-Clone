'use strict'

import { SingletonFactory } from './SingletonFactory';
import { Logger } from './Logger';
import { Env } from './Env';
import { Database } from './Database';

export class Singleton {
    private static logger_instance: Logger;
    private static env_instance: Env;
    private static database_instance: Database;

    private constructor() {}
  
    public static async boot() {
        if (!this.getLoggerInstance())
            this.logger_instance = await SingletonFactory.create('Logger');

        if (!this.getDatabaseInstance())
            this.database_instance = await SingletonFactory.create('Database');

        if (!this.getEnvInstance())
            this.env_instance = await SingletonFactory.create('Env');
    };

    public static getLoggerInstance(): Logger {
        return this.logger_instance;
    }; 

    public static getEnvInstance(): Env {
        return this.env_instance;
    }; 
    
    public static getDatabaseInstance(): Database {
        return this.database_instance;
    }; 
};
