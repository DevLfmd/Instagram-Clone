'use strict'

import { Db, MongoClient, MongoError } from 'mongodb';
import dotenv from 'dotenv';

export class Database {
    private static _instance: Database;
    private _database: Db;
    private _dbClient: MongoClient;

    private constructor() {};

    public static async getInstance(): Promise<Database> {
        return new Promise(async (resolve, reject) => {
            const { parsed }: any = dotenv.config();
            this._instance = new Database();
            this._instance._dbClient = await MongoClient.connect(
                `${parsed.DB_CONNECTION}://${parsed.DB_HOST}`, { 
                    useUnifiedTopology: true 
                }
            );
            
            this._instance._dbClient.connect((error: MongoError) => {
                if(error)
                    reject(error);
                    
                this._instance._database = this._instance._dbClient.db(parsed.DB_DATABASE);
                resolve(this._instance);
            });
        });    
    };

    get db(): Db {
        return Database._instance._database;
    };

    get client(): MongoClient {
        return Database._instance._dbClient;
    };
};