/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';
import { DateNow } from 'src/modules/users/utils/dateNow';

export class Train {
    readonly id: string
    manufacturer: string
    reference: string
    description: string
    model: string
    railroad: string
    number: string | null
    coverImage: string | null
    isActive: boolean 
    readonly createdAt: string
    userId: string

    constructor(){
        const dateNow: DateNow = new DateNow()

        this.id = randomUUID()
        this.createdAt = dateNow.getDate()
        this.isActive = false
    }

}