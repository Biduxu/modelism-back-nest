/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';

export class User {
    readonly id: string
    username: string
    email: string
    password: string
    fullName: string
    birthdate: string
    readonly createdAt: string
    imageProfile: string | null

    private getDate = (): string => {
        const date: Date = new Date( Date.now() )

        const day: string = date.getDate().toString()
        const month: string = (date.getUTCMonth() + 1).toString()
        const year: string = date.getFullYear().toString()

        return `${day}/${month}/${year}`
    }

    constructor(){
        this.id = randomUUID()
        this.createdAt = this.getDate()
    }

}