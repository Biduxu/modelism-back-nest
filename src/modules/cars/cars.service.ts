/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CarsRepository } from './repositories/cars.repository';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './entities/car.entity';
import { UpdateCarDto } from './dto/update-car.dto';

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
        const car: Car | null = await this.carsRepository.findOne(carId)

        if(!car){
            throw new NotFoundException('Car not found!')
        }

        return car
    }

    async update(data: UpdateCarDto, carId: string, userId: string) {
        const carFound: Car | null = await this.carsRepository.findOne(carId)

        if(!carFound){
            throw new NotFoundException('Car not found!')
        }

        if(carFound.userId !== userId){
            throw new UnauthorizedException('You do not have permission!')
        }

        const car: Car = await this.carsRepository.update(data, carId)
        
        return car
    }

    async cleanCar(carId: string, userId: string){
        const carFound: Car | null = await this.carsRepository.findOne(carId)

        if(!carFound){
            throw new NotFoundException('Car not found!')
        }

        if(carFound.userId !== userId){
            throw new UnauthorizedException('You do not have permission!')
        }

        const car: Car = await this.carsRepository.cleanCar(carId)

        return car
    }

    async remove(carId: string, userId: string){
        const carFound: Car | null = await this.carsRepository.findOne(carId)

        if(!carFound){
            throw new NotFoundException('Car not found!')
        }

        if(carFound.userId !== userId){
            throw new UnauthorizedException('You do not have permission!')
        }

        await this.carsRepository.delete(carId)

        return
    }

}
