import {Body, Controller, Delete, Get, NotFoundException, Param, Post, UseFilters} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./interface/product.interface";
import {CreateProductDto} from "./dto/create-product.dto";
import {HttpExceptionFilter} from "../common/filter/http-exception.filter";

@Controller('products')
@UseFilters(HttpExceptionFilter)
export class ProductsController {

    constructor(private productService: ProductsService) {
    }

    @Get()
    findAll(@Param() params): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param() params): Promise<Product> {
        return this.productService.findOne(params.id);
    }

    @Post()
    async create(@Body() product: CreateProductDto): Promise<Product[]> {
        return this.productService.create(product)
    }

    @Delete(':id')
    // @UseFilters(HttpExceptionFilter)
    async delete(@Param() params): Promise<Product[]>{
        return this.productService.delete(params.id);
        // throw new NotFoundException();
    }
 
}
