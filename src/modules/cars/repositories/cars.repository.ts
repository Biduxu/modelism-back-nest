/* eslint-disable prettier/prettier */
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';
import { Car } from '../entities/car.entity';

export abstract class CarsRepository {
    abstract create(data: CreateCarDto, userId: string): Promise<Car>
    abstract findAllUserCars(userId: string): Promise<Car[]>
    abstract findOne(carId: string): Promise<Car>
    abstract update(data: UpdateCarDto, carId: string): Promise<Car>
    abstract cleanCar(carId: string): Promise<Car>
    abstract delete(carId: string): Promise<void>
}