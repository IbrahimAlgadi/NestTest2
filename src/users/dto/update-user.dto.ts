import {IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword} from "class-validator";
import {PhotoEntity} from "../../photos/entity/photos.entity";
import {UpdatePhotoDto} from "../../photos/dto/update-photo.dto";

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    @IsStrongPassword()
    password: string;

    @IsOptional()
    @IsArray()
    photos: UpdatePhotoDto[];
}