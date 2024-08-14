import {IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Max} from "class-validator";

export class UpdateProductDto {
    // @IsNotEmpty()
    // @IsString()
    // id: string;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsInt()
    qty: number;

    @IsOptional()
    @IsNumber()
    price: number;

    @IsOptional()
    @IsString()
    // @Max(45 )
    partNumber: string;

    @IsOptional()
    @IsString()
    // @Max(45 )
    dimension: string;

    @IsOptional()
    @IsNumber()
    weight: number;

    @IsOptional()
    @IsString()
    // @Max(45 )
    manufacturer: string;

    @IsOptional()
    @IsString()
    // @Max(45 )
    origin: string;
}