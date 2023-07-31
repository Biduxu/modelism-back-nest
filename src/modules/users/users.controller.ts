/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Get, Post, Body, Param, Patch, Delete, HttpCode, UseGuards, Request } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordUserDto } from './dto/update-password-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id :string, @Request() req: any){
    return this.usersService.findOne(id, req.user.id)
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() data: UpdateUserDto, @Request() req: any) {
    return this.usersService.update(id, data, req.user.id)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  remove(@Param('id') id: string, @Request() req: any) {
    return this.usersService.remove(id, req.user.id)
  }

  @Patch(':id/password')
  @UseGuards(JwtAuthGuard)
  updatePassword(@Param('id') id: string, @Body() data: UpdatePasswordUserDto, @Request() req: any) {
    return this.usersService.updatePassword(id, data, req.user.id)
  }
}
