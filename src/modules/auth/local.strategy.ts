/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            usernameField: "email" || "username",
            passwordField: "password"
        })
    }

    async validate(email: string, password:string){
        let data 

        if(email.includes("@")){
            data = {
                email: email,
                password: password
            }
        }else{
            data = {
                username: email,
                password: password
            }
        }
    
        const user = await this.authService.validateUser(data)

        if(!user){
            throw new UnauthorizedException("Invalid email or password!")
        }

        return user
    }
}