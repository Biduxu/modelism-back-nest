/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { CarsRepository } from './repositories/cars.repository';
import { CarsInMemoryRepository } from './repositories/in-memory/cars.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CarsPrismaRepository } from './repositories/prisma/cars.prisma.repository';

@Module({
  controllers: [CarsController],
  providers: [
    CarsService,
    PrismaService,
    {
      provide: CarsRepository,
      useClass: CarsPrismaRepository
    }
  ],
  exports: [CarsService]
})
export class CarsModule {}
