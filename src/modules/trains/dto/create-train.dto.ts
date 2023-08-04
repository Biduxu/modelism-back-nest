/* eslint-disable prettier/prettier */
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTrainDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    manufacturer: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    reference: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(120)
    description: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    model: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    railroad: string

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(50)
    number: string | null

    @IsBoolean()
    @IsOptional()
    isActive: boolean

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(120)
    coverImage: string
}