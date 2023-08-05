/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TrainsRepository } from '../trains.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTrainDto } from '../../dto/create-train.dto';
import { Train } from '../../entities/train.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateTrainDto } from '../../dto/update-train.dto';

@Injectable()
export class TrainsPrismaRepository implements TrainsRepository {
    constructor(private prisma: PrismaService){}

    async create(data: CreateTrainDto, userId: string): Promise<Train> {
        const train = new Train()

        Object.assign(train, {
            ...data,
            userId: userId
        })
        
        const newTrain = await this.prisma.train.create({
            data: {...train}
        })

        return newTrain
    }

    async findAllUserTrains(userId: string): Promise<Train[]> {
        const userTrains = await this.prisma.train.findMany({
            where: {userId}
        })

        return userTrains
    }

    async findOne(trainId: string): Promise<Train> {
        const train = await this.prisma.train.findUnique({
            where: {id: trainId}
        })

        return plainToInstance(Train, train)
    }

    async update(data: UpdateTrainDto, trainId: string): Promise<Train> {
        const train = await this.prisma.train.update({
            where: {id: trainId},
            data: {...data}
        })

        return train
    }

    async delete(trainId: string): Promise<void> {
        await this.prisma.train.delete({
            where: {id: trainId}
        })
    }
}