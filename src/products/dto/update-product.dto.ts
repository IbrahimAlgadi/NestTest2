import {IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

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
}