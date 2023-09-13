/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, ConflictException, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordUserDto } from './dto/update-password-user.dto';
import { compare, hashSync } from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository){}

    private verifyOwner = (id: string, idRequest: string) => {
        if(id !== idRequest){
          throw new UnauthorizedException('You do not have permission')
        }
      }

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

    async findOne(id: string, idRequest: string) {
        this.verifyOwner(id, idRequest)
        
        const user: User | null = await this.usersRepository.findOne(id, false)

        if(!user){
            throw new NotFoundException('User not found!')
        }

        return user
    }

    async update(id: string, data: UpdateUserDto, idRequest: string) {
        this.verifyOwner(id, idRequest)

        const user: User | null = await this.usersRepository.findOne(id, false)

        if(!user){
            throw new NotFoundException('User not found!')
        }

        if(data.username){
            const userByUsername: User | null = await this.usersRepository.findByUsername(data.username)

            if(userByUsername){
                throw new ConflictException("Username already exists!")
            }
        }

        if(data.email){
            const userByEmail: User | null = await this.usersRepository.findByEmail(data.email)

            if(userByEmail){
                throw new ConflictException("Email already exists!")
            }
        }

        const updateUser = await this.usersRepository.update(id, data)

        return updateUser
    }

    async remove(id: string, idRequest: string) {
        this.verifyOwner(id, idRequest)

        const user: User | null = await this.usersRepository.findOne(id, false)

        if(!user){
            throw new NotFoundException('User not found!')
        }

        await this.usersRepository.delete(id)
    }

    async updatePassword(id: string, data: UpdatePasswordUserDto, idRequest: string) {
        this.verifyOwner(id, idRequest)

        const user: User | null = await this.usersRepository.findOne(id, true)

        if(!user){
            throw new NotFoundException('User not found!')
        }
        
        const passwordMatch: boolean = await compare(data.currentPassword, user.password)
        
        if(!passwordMatch){
            throw new NotFoundException('Current password not match!')
        }

        const newPassword: string = hashSync(data.newPassword, 10)

        const updateUser = await this.usersRepository.updatePassword(id, {
            password: newPassword
        })

        return updateUser
    }

    async findByUsername(username: string){
        const user = await this.usersRepository.findByUsername(username)

        return user
    }

    async findByEmail(email: string){
        const user = await this.usersRepository.findByEmail(email)

        return user
    }
}
