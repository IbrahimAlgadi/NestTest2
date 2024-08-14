import {IsArray, IsEmail, IsNotEmpty, IsString, IsStrongPassword} from "class-validator";
import {PhotoEntity} from "../../photos/entity/photos.entity";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    password: string;

    @IsArray()
    photos: PhotoEntity[];
}