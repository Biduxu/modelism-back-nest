/* eslint-disable prettier/prettier */
import { CreateTrainDto } from '../dto/create-train.dto';
import { UpdateTrainDto } from '../dto/update-train.dto';
import { Train } from '../entities/train.entity';

export abstract class TrainsRepository {
    abstract create(data: CreateTrainDto, userId: string): Promise<Train>
    abstract findAllUserTrains(userId: string): Promise<Train[]>
    abstract findOne(trainId: string): Promise<Train>
    abstract update(data: UpdateTrainDto, trainId: string): Promise<Train>
    abstract delete(trainId: string): Promise<void>
}
