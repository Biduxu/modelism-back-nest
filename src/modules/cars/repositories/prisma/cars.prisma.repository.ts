/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CarsRepository } from '../cars.repository';
import { CreateCarDto } from '../../dto/create-car.dto';
import { Car } from '../../entities/car.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { UpdateCarDto } from '../../dto/update-car.dto';
import { DateNow } from 'src/modules/users/utils/dateNow';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
    constructor(private prisma: PrismaService){}

    async create(data: CreateCarDto, userId: string): Promise<Car> {
        const car = new Car()

        if(!data.lastClean){
            data.lastClean = null
        }

        if(!data.coverImage){
            data.coverImage = null
        }

        Object.assign(car, {
            ...data,
            userId: userId
        })

        const newCar = await this.prisma.car.create({
            data: {...car}
        })

        return newCar
    }

    async findAllUserCars(userId: string): Promise<Car[]> {
        const userCars = await this.prisma.car.findMany({
            where: {userId}
        })

        return userCars
    }

    async findOne(carId: string): Promise<Car> {
        const car = await this.prisma.car.findUnique({
            where: {id: carId}
        })

        return plainToInstance(Car, car)
    }

    async update(data: UpdateCarDto, carId: string): Promise<Car> {
        const car = await this.prisma.car.update({
            where: {id: carId},
            data: {...data}
        })

        return car
    }

    async cleanCar(carId: string): Promise<Car> {
        const dateNow: DateNow = new DateNow()

        const dataLastClean = {
            lastClean: dateNow.getDate()
        }

        const car = await this.prisma.car.update({
            where: {id: carId},
            data: {...dataLastClean}
        })

        return car
    }

    async delete(carId: string): Promise<void> {
        await this.prisma.car.delete({
            where: {id: carId}
        })
    }
}