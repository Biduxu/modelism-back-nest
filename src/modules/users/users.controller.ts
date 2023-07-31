/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Get, Post, Body, Param, Patch, Delete, HttpCode } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordUserDto } from './dto/update-password-user.dto';

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

  @Get(':id')
  findOne(@Param('id') id :string){
    return this.usersService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.usersService.update(id, data)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }

  @Patch(':id/password')
  updatePassword(@Param('id') id: string, @Body() data: UpdatePasswordUserDto) {
    return this.usersService.updatePassword(id, data)
  }
}
