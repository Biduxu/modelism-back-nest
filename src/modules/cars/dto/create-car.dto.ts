/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(120)
    brand: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(120)
    model: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(4)
    year: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    color: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    price: string

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(120)
    lastClean: string | null
}