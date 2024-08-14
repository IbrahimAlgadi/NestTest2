import {Injectable, NotFoundException} from '@nestjs/common';
import {Product} from "./interface/product.interface";
import {CreateProductDto} from "./dto/create-product.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {ProductEntity} from "./products.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {UpdateProductDto} from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
    products: Product[] = [];

    constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,) {
    }

    async create(product: CreateProductDto): Promise<Product> {
        // this.products.push(product);
        return this.productRepository.save(product);
        // return this.products;
    }

    async update(id: number, productUpdate: UpdateProductDto): Promise<Product> {
        // this.products.push(product);
        const product = await this.productRepository.findOneBy({id});

        if (!product) {
            throw new NotFoundException("Couldn't find any product with the id")
        }
        //
        this.productRepository.merge(product, productUpdate);

        return this.productRepository.save(product);
        // return this.products;
    }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async findOne(id: number): Promise<Product> {
        const result = await this.productRepository.findOneBy({id});

        if (!result) {
            throw new NotFoundException("Couldn't find any product with the id")
        }

        return result
        // return this.productRepository.findOneBy({id});
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.productRepository.delete(id)
    }
}
