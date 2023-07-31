/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../users.repository';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';
import { plainToInstance } from 'class-transformer';
import { UpdateUserDto } from '../../dto/update-user.dto';

@Injectable()
export class UsersInMemoryRepository implements UsersRepository {
    private database: User[] = []
    create(data: CreateUserDto): User | Promise<User> {
        const newUser = new User()

        if(!data.imageProfile){
            data.imageProfile = null
        }

        Object.assign(newUser, {
            ...data
        })

        this.database.push(newUser)

        return plainToInstance(User, newUser)
    }

    findAll(): User[] | Promise<User[]> {
        return plainToInstance(User, this.database)
    }

    findOne(id: string): User | Promise<User> {
        const userIndex: number = this.database.findIndex((userFound) => {
            return userFound.id === id
        })

        return this.database[userIndex]
    }

    findByUsername(username: string): User | Promise<User> {
        const userIndex: number = this.database.findIndex((userFound) => {
            return userFound.username === username
        })

        return this.database[userIndex]
    }

    findByEmail(email: string): User | Promise<User> {
        const userIndex: number = this.database.findIndex((userFound) => {
            return userFound.email === email
        })

        return this.database[userIndex]
    }

    update(id: string, data: UpdateUserDto): User | Promise<User> {
        const userIndex: number = this.database.findIndex((userFound) => {
            return userFound.id === id
        })

        Object.assign(this.database[userIndex], {
            ...this.database[userIndex],
            ...data
        })

        return plainToInstance(User, this.database[userIndex])
    }

    delete(id: string): void | Promise<void> {
        const userIndex: number = this.database.findIndex((userFound) => {
            return userFound.id === id
        })

        this.database.splice(userIndex, 1)

        return 
    }

    updatePassword(id: string, data: UpdateUserDto): string | Promise<string> {
        const userIndex: number = this.database.findIndex((userFound) => {
            return userFound.id === id
        })

        Object.assign(this.database[userIndex], {
            ...this.database[userIndex],
            ...data
        })

        return "Success. Password changed!"
    }
}