import {IsDataURI, IsEmail, IsNotEmpty, IsString, IsStrongPassword, IsUrl} from "class-validator";

export class CreatePhotoDto {
    @IsNotEmpty()
    @IsDataURI()
    url: string;
}