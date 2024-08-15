import {IsDataURI, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, IsUrl} from "class-validator";

export class UpdatePhotoDto {
    @IsOptional()
    @IsDataURI()
    url: string;
}