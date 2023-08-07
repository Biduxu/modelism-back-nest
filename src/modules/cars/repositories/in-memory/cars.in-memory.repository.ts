/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CarsRepository } from '../cars.repository';
import { CreateCarDto } from '../../dto/create-car.dto';
import { Car } from '../../entities/car.entity';
import { UpdateCarDto } from '../../dto/update-car.dto';
import { DateNow } from 'src/modules/users/utils/dateNow';

@Injectable()
export class CarsInMemoryRepository implements CarsRepository {
    private database: Car[] = []
    async create(data: CreateCarDto, userId: string): Promise<Car> {
        const newCar = new Car()

        if(!data.lastClean){
            data.lastClean = null
        }

        Object.assign(newCar, {
            ...data,
            userId: userId
        })

        this.database.push(newCar)

        return newCar
    }

    async findAllUserCars(userId: string): Promise<Car[]> {
        const userCars: Car[] = this.database.filter((car) => {
            return car.userId === userId
        })

        return userCars
    }

    async findOne(carId: string): Promise<Car> {
        const carIndex: number = this.database.findIndex((car) => {
            return car.id === carId
        })

        return this.database[carIndex]
    }

    async update(data: UpdateCarDto, carId: string): Promise<Car> {
        const carIndex: number = this.database.findIndex((car) => {
            return car.id === carId
        })

        Object.assign(this.database[carIndex], {
            ...this.database[carIndex],
            ...data
        })

        return this.database[carIndex]
    }

    async cleanCar(carId: string): Promise<Car> {
        const carIndex: number = this.database.findIndex((car) => {
            return car.id === carId
        })

        const dateNow: DateNow = new DateNow()

        const dataLastClean = {
            lastClean: dateNow.getDate()
        }

        Object.assign(this.database[carIndex], {
            ...this.database[carIndex],
            ...dataLastClean
        })

        return this.database[carIndex]
    }

    async delete(carId: string): Promise<void> {
        const carIndex: number = this.database.findIndex((car) => {
            car.id === carId
        })

        this.database.splice(carIndex, 1)

        return 
    }
}