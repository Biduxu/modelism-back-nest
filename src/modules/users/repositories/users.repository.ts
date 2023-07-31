/* eslint-disable prettier/prettier */
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export abstract class UsersRepository {
    abstract create(data: CreateUserDto): Promise<User> | User
    abstract findAll(): Promise<User[]> | User[]
    abstract findOne(id: string): Promise<User> | User
    abstract findByUsername(username: string): Promise<User> | User
    abstract findByEmail(email: string): Promise<User> | User
    abstract update(id: string, data: UpdateUserDto): Promise<User> | User
    abstract delete(id: string): Promise<void> | void
    abstract updatePassword(id: string, data: UpdateUserDto): Promise<string> | string
}