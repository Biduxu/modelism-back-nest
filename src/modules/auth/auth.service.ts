/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

interface LoginData{
    username?: string,
    email?: string,
    password: string
}

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async validateUser(data: LoginData) {
        if(data.username){
            const user = await this.usersService.findByUsername(data.username)

            if(user){
                const passwordMatch = await compare(data.password, user.password)

                if(passwordMatch){
                    return {username: user.username}
                }

                return null
            }
        }

        if(data.email){
            const user = await this.usersService.findByEmail(data.email)

            if(user){
                const passwordMatch = await compare(data.password, user.password)

                if(passwordMatch){
                    return {email: user.email}
                }

                return null
            }
        }
    }

    async login(emailOrUsername: string){
        let email
        let username

        if(emailOrUsername.includes("@")){
            email = emailOrUsername
            username = null
        }else{
            email = null
            username = emailOrUsername
        }

        if(email){
            const user = await this.usersService.findByEmail(email)
            
            return {
                token: this.jwtService.sign({ email }, { subject: user.id })
            }
        }

        if(username){
            const user = await this.usersService.findByUsername(username)
            
            const email: string = user.email
            return {
                token: this.jwtService.sign({ email }, { subject: user.id })
            }
        }
    }
}
