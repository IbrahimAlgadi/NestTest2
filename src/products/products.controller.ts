import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param, Patch,
    Post,
    UseFilters,
    UseInterceptors
} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./interface/product.interface";
import {CreateProductDto} from "./dto/create-product.dto";
import {HttpExceptionFilter} from "../common/filter/http-exception.filter";
import {TransformInterceptor} from "../common/interceptor/transform/transform.interceptor";
import {DeleteResult, UpdateResult} from "typeorm";
import {UpdateProductDto} from "./dto/update-product.dto";

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {

    constructor(private productService: ProductsService) {
    }

    @Post()
    async create(@Body() product: CreateProductDto): Promise<Product> {
        console.log(product)
        return this.productService.create(product)
    }

    @Get()
    findAll(@Param() params): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Product> {
        return this.productService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() product: UpdateProductDto): Promise<Product> {
        return this.productService.update(id, product)
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any>{
        return this.productService.delete(id);
    }
 
}
