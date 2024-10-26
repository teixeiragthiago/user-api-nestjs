import { IsBoolean, IsEmail, isNotEmpty, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    @IsString()
    Nickname: string;

    @IsNotEmpty()
    @IsString()
    Password: string;
}