/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TrainsService } from './trains.service';
import { TrainsController } from './trains.controller';
import { TrainsRepository } from './repositories/trains.repository';
import { TrainsInMemoryRepository } from './repositories/in-memory/trains.in-memory.repository';

@Module({
  controllers: [TrainsController],
  providers: [
    TrainsService,
    {
      provide: TrainsRepository,
      useClass: TrainsInMemoryRepository
    }
  ],
  exports: [TrainsService]
})
export class TrainsModule {}
