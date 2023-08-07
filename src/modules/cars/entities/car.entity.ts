/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';
import { DateNow } from 'src/modules/users/utils/dateNow';

export class Car {
    readonly id: string
    brand: string
    model: string
    year: string
    color: string
    price: string
    lastClean: string | null
    readonly createdAt: string
    userId: string

    constructor(){
        const dateNow: DateNow = new DateNow()

        this.id = randomUUID()
        this.createdAt = dateNow.getDate()
    }
}