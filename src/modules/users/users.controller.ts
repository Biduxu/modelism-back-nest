/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Get, Post, Body } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.usersService.create(data)
  }

  @Get()
  findAll(){
    return this.usersService.findAll()
  }
}
