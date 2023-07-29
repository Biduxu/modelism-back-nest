/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository){}

    async create(data: CreateUserDto) {

        const userByUsername: User | null = await this.usersRepository.findByUsername(data.username)
        if(userByUsername){
            throw new ConflictException("Username already exists!")
        }

        const userByEmail: User | null = await this.usersRepository.findByEmail(data.email)
        if(userByEmail){
            throw new ConflictException("Email already exists!")
        }

        const user: User = await this.usersRepository.create(data)
        
        return user
    }

    async findAll() {
        const users: User[] = await this.usersRepository.findAll()

        return users
    }

    async findOne(id: string) {
        const user: User | null = await this.usersRepository.findOne(id)

        if(!user){
            throw new NotFoundException('User not found!')
        }

        return user
    }
}
