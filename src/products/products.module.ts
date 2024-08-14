import { Module } from '@nestjs/common';
import {ProductsController} from "./products.controller";
import { ProductsService } from './products.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductEntity} from "./entities/products.entity";
import {ProductDetailsEntity} from "./entities/product-details.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity, ProductDetailsEntity])],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
