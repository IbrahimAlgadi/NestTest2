import {IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Max} from "class-validator";

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

    @IsNotEmpty()
    @IsString()
    // @Max(45 )
    partNumber: string;

    @IsNotEmpty()
    @IsString()
    // @Max(45 )
    dimension: string;

    @IsNotEmpty()
    @IsNumber()
    weight: number;

    @IsNotEmpty()
    @IsString()
    // @Max(45 )
    manufacturer: string;

    @IsNotEmpty()
    @IsString()
    // @Max(45 )
    origin: string;
}