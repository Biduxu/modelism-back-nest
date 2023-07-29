/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository){}

    async create(data: CreateUserDto) {
        const user: User = await this.usersRepository.create(data)
        
        return user
    }

    async findAll() {
        const users: User[] = await this.usersRepository.findAll()

        return users
    }
}
