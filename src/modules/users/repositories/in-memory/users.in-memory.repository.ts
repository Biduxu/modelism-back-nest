/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../users.repository';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';
import { plainToInstance } from 'class-transformer';

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
        return this.database
    }
}