/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

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

    private getDate = (): string => {
        const date: Date = new Date( Date.now() )

        const day: string = date.getDate().toString()
        const monthNumber: number = (date.getUTCMonth() + 1)

        let month

        if(monthNumber < 10){
            month = `0${monthNumber}`
        }

        const year: string = date.getFullYear().toString()

        return `${day}/${month}/${year}`
    }

    constructor(){
        this.id = randomUUID()
        this.createdAt = this.getDate()
    }

}