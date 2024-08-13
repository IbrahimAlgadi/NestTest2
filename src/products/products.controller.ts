import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./interface/product.interface";
import {CreateProductDto} from "./dto/create-product.dto";

@Controller('products')
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
    async delete(@Param() params): Promise<Product[]>{
        return this.productService.delete(params.id);
    }
 
}
