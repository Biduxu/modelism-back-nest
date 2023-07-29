/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(120)
    username: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(120)
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(120)
    password: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(120)
    fullName: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    birthdate: string

    @IsString()
    @IsOptional()
    @MaxLength(120)
    imageProfile: string | null
    
}