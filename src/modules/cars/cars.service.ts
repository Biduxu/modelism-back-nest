/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CarsRepository } from './repositories/cars.repository';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
    constructor(private carsRepository: CarsRepository){}

    async create(data: CreateCarDto, userId: string) {
        const car: Car = await this.carsRepository.create(data, userId)

        return car
    }

    async findAllUserCars(userId: string) {
        const cars: Car[] = await this.carsRepository.findAllUserCars(userId)

        return cars
    }

    async findOne(carId: string) {
        const car: Car = await this.carsRepository.findOne(carId)

        return car
    }

}
