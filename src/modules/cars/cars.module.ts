/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { CarsRepository } from './repositories/cars.repository';
import { CarsInMemoryRepository } from './repositories/in-memory/cars.in-memory.repository';

@Module({
  controllers: [CarsController],
  providers: [
    CarsService,
    {
      provide: CarsRepository,
      useClass: CarsInMemoryRepository
    }
  ],
  exports: [CarsService]
})
export class CarsModule {}
