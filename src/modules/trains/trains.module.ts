/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TrainsService } from './trains.service';
import { TrainsController } from './trains.controller';
import { TrainsRepository } from './repositories/trains.repository';
import { TrainsInMemoryRepository } from './repositories/in-memory/trains.in-memory.repository';
import { TrainsPrismaRepository } from './repositories/prisma/trains.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TrainsController],
  providers: [
    TrainsService,
    PrismaService,
    {
      provide: TrainsRepository,
      useClass: TrainsPrismaRepository
    }
  ],
  exports: [TrainsService]
})
export class TrainsModule {}
