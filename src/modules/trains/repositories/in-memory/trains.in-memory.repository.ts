/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TrainsRepository } from '../trains.repository';
import { Train } from '../../entities/train.entity';
import { CreateTrainDto } from '../../dto/create-train.dto';
import { UpdateTrainDto } from '../../dto/update-train.dto';

@Injectable()
export class TrainsInMemoryRepository implements TrainsRepository {
    private database: Train[] = []
    async create(data: CreateTrainDto, userId: string): Promise<Train> {
        const newTrain = new Train()

        if(!data.number){
            data.number = null
        }

        Object.assign(newTrain, {
            ...data,
            userId: userId
        })

        this.database.push(newTrain)

        return newTrain
    }

    async findAllUserTrains(userId: string): Promise<Train[]> {
        const userTrains = this.database.filter((train) => {
            return train.userId === userId
        })

        return userTrains
    }

    async findOne(trainId: string): Promise<Train> {
        const trainIndex = this.database.findIndex((train) => {
            return train.id === trainId
        })

        return this.database[trainIndex]
    }

    async update(data: UpdateTrainDto, trainId: string): Promise<Train> {
        const trainIndex = this.database.findIndex((train) => {
            return train.id === trainId
        })

        Object.assign(this.database[trainIndex], {
            ...this.database[trainIndex],
            ...data
        })

        return this.database[trainIndex]

    }

    async delete(trainId: string): Promise<void> {
        const trainIndex = this.database.findIndex((train) => {
            return train.id === trainId
        })

        this.database.splice(trainIndex, 1)
    }
}