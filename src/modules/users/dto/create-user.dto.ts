/* eslint-disable prettier/prettier */
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
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
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ["transform"]
    })
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