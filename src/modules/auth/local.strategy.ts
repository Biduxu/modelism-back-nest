/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            usernameField: "emailOrUsername",
            passwordField: "password"
        })
    }

    async validate(emailOrUsername: string, password:string){
        let data 

        if(emailOrUsername.includes("@")){
            data = {
                email: emailOrUsername,
                password: password
            }
        }else{
            data = {
                username: emailOrUsername,
                password: password
            }
        }
    
        const user = await this.authService.validateUser(data)

        if(!user){
            throw new UnauthorizedException("Invalid credentials!")
        }

        return user
    }
}