'use strict'

import { Db } from 'mongodb';

const user_migration = async(db: Db) => {
    db.createCollection("users", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["login", "password"],
                properties: {
                    login: {
                        bsonType: "string",
                        description: "credencial de login"
                    },
                    password: {
                        bsonType: "string",
                        description: "credencial de login"
                    },
                    profile: {
                        bsonType: "object",
                        required: ["name"],
                        properties: {
                            name: {
                                bsonType: "string",
                                description: "user full name"
                            },
                            pic: {
                                bsonType: "string",
                                description: "store the user profile photo"
                            }
                        }
                    }
                }
            }
        }
    });
};