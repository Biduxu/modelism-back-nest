/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';
import { DateNow } from '../hooks/dateNow';

export class User {
    readonly id: string
    username: string
    email: string
    @Exclude()
    password: string
    fullName: string
    birthdate: string
    readonly createdAt: string
    imageProfile: string | null

    constructor(){
        const dateNow: DateNow = new DateNow()

        this.id = randomUUID()
        this.createdAt = dateNow.getDate()
    }

}