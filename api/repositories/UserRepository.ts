'use strict'

import { BaseRepository } from "./base/BaseRepository";
import { User } from "../entities/User";

export class UserRepository extends BaseRepository<User>{

    /**
     * Encontra usuário 
     * por login e senha
     * @return User
     */
    public async findByCredentials(login: string, password: string): Promise<User> {
        return this._collection.findOne({
            $and: [
                { login },
                { password }
            ]
        });
    };
};