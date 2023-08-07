/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { TrainsService } from './trains.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Controller('trains')
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateTrainDto, @Request() req: any) {
    return this.trainsService.create(data, req.user.id)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAllUserTrains(@Request() req: any) {
    return this.trainsService.findAllUserTrains(req.user.id)
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') trainId: string){
    return this.trainsService.findOne(trainId)
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  update(@Body() data: UpdateTrainDto, @Param('id') trainId: string, @Request() req: any){
    return this.trainsService.update(data, trainId, req.user.id)
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  remove(@Param('id') traindId: string, @Request() req: any) {
    return this.trainsService.delete(traindId, req.user.id)
  }

}
