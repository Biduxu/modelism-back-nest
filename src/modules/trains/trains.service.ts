/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { TrainsRepository } from './repositories/trains.repository';
import { CreateTrainDto } from './dto/create-train.dto';
import { Train } from './entities/train.entity';
import { UpdateTrainDto } from './dto/update-train.dto';

@Injectable()
export class TrainsService {
    constructor(private trainsRepository: TrainsRepository){}

    async create(data: CreateTrainDto, userId: string) {
        const train: Train = await this.trainsRepository.create(data, userId)

        return train
    }

    async findAllUserTrains(userId: string){
        const trains = await this.trainsRepository.findAllUserTrains(userId)

        return trains
    }

    async findOne(trainId: string){
        const train = await this.trainsRepository.findOne(trainId)

        if(!train){
            throw new NotFoundException("Train not found!")
        }

        return train
    }

    async update(data: UpdateTrainDto, trainId: string, userId: string){
        const train = await this.trainsRepository.findOne(trainId)

        if(!train){
            throw new NotFoundException("Train not found!")
        }

        if(train.userId !== userId){
            throw new UnauthorizedException("You do not have permission!")
        }

        const updateTrain = await this.trainsRepository.update(data, trainId, userId)

        return updateTrain
    }

    async delete(trainId: string, userId: string){
        const train = await this.trainsRepository.findOne(trainId)

        if(!train){
            throw new NotFoundException("Train not found!")
        }

        if(train.userId !== userId){
            throw new UnauthorizedException("You do not have permission!")
        }

        await this.trainsRepository.delete(trainId, userId)
    }
}
