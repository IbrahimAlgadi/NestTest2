import {IsInt, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateProductDto {
    // @IsNotEmpty()
    // @IsString()
    // id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsInt()
    qty: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}