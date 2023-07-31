/* eslint-disable prettier/prettier */
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

interface LoginData{
  username?: string
  email?: string,
  password: string
}

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  async login(@Body() data: LoginData){
    if(data.username){
      return await this.authService.login(data.username)
    }

    if(data.email){
      return await this.authService.login(data.email)
    }
  }
}
