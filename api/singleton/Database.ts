import { Db, MongoClient, MongoError } from 'mongodb';

type MongoDBCredential = {
    dbName: string;
    username: string,
};

export class Database {
    private static _instance: Database;
    private _database: Db;
    private _dbClient: MongoClient;

    private constructor() {};

    public static async getInstance(cred: Readonly<MongoDBCredential>): Promise<Database> {
        return new Promise((resolve, reject) => {
            if(this._instance) {
                resolve(this._instance);
            }
            
            this._instance = new Database();
            this._instance._dbClient = new MongoClient(`${cred.dbName}://${cred.username}` , { useUnifiedTopology: true });
            this._instance._dbClient.connect((error: MongoError) => {
                if(error)
                    reject(error);
                    
                this._instance._database = this._instance._dbClient.db(cred.dbName);
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