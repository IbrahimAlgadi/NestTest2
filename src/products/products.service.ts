import {Injectable, NotFoundException} from '@nestjs/common';
import {Product} from "./interface/product.interface";
import {CreateProductDto} from "./dto/create-product.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {ProductEntity} from "./entities/products.entity";
import {Repository} from "typeorm";
import {UpdateProductDto} from "./dto/update-product.dto";
import {ProductDetailsEntity} from "./entities/product-details.entity";

@Injectable()
export class ProductsService {
    // products: Product[] = [];

    constructor(
        @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
        @InjectRepository(ProductDetailsEntity) private productDetailsRepository: Repository<ProductDetailsEntity>,
    ) {
    }

    async create(product: CreateProductDto): Promise<Product> {
        // this.products.push(product);
        const productDetails = await this.productDetailsRepository.save({
            dimension: product.dimension,
            partNumber: product.partNumber,
            weight: product.weight,
            manufacturer: product.manufacturer,
            origin: product.origin,
        });
        const productEntity = new ProductEntity();
        productEntity.name = product.name;
        productEntity.price = product.price;
        productEntity.qty = product.qty;
        productEntity.productDetails = productDetails;
        await this.productRepository.save(productEntity)
        return {...productEntity, productDetails};
        // return this.products;
    }

    async update(id: number, productUpdate: UpdateProductDto): Promise<Product> {
        // this.products.push(product);
        let product = await this.productRepository.findOne({where: {id}, relations: ['productDetails']});

        if (!product) {
            throw new NotFoundException("Couldn't find any product with the id")
        }
        //
        this.productDetailsRepository.merge(product.productDetails, {
            partNumber: productUpdate.partNumber,
            dimension: productUpdate.dimension,
            weight: productUpdate.weight,
            manufacturer: productUpdate.manufacturer,
            origin: productUpdate.origin,
        });
        product.productDetails = await this.productDetailsRepository.save(product.productDetails)
        // Update product
        this.productRepository.merge(product, {
            name: productUpdate.name,
            price: productUpdate.price,
            qty: productUpdate.qty,
        });
        product = await this.productRepository.save(product);
        // const productDetails = await this.productDetailsRepository.getId()
        return product;
        // return this.products;
    }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find({relations: ['productDetails']});
    }

    async findOne(id: number): Promise<Product> {
        const result = await this.productRepository.findOne({
            where: {id},
            relations: ['productDetails']
        });

        if (!result) {
            throw new NotFoundException("Couldn't find any product with the id")
        }

        return result
        // return this.productRepository.findOneBy({id});
    }

    async delete(id: number): Promise<any> {
        const product = await this.productRepository.findOne({
            where: {id},
            relations: ['productDetails'],
        });

        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }

        const deleteOperations = [
            this.productRepository.delete(product.id),
        ];
        let msg = `product with id ${product.id}`;

        if (product.productDetails) {
            deleteOperations.push(this.productDetailsRepository.delete(product.productDetails.id));
            msg += ` and product details with id ${product.productDetails.id}`
        }

        await Promise.all(deleteOperations);

        msg += ' deleted';

        return {
            msg
        }
    }
}
