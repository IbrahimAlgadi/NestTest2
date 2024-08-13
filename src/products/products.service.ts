import { Injectable } from '@nestjs/common';
import {Product} from "./interface/product.interface";
import {CreateProductDto} from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
    products: Product[] = [];

    async create(product: CreateProductDto): Promise<Product[]> {
        this.products.push(product);
        return this.products;
    }

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async findOne(id: string): Promise<Product> {
        return this.products.find(p => p.id === id);
    }

    async delete(id: string): Promise<Product[]> {
        let index = this.products.findIndex(p => p.id === id);
        this.products.splice(index, 1);
        return this.products;
    }
}
