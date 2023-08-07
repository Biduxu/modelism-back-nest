/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class UpdatePasswordUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(120)
    currentPassword: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(120)
    newPassword: string
}