/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Request, UseGuards, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateCarDto, @Request() req: any){
    return this.carsService.create(data, req.user.id)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAllUserCars(@Request() req: any){
    return this.carsService.findAllUserCars(req.user.id)
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') carId: string){
    return this.carsService.findOne(carId)
  }
}
