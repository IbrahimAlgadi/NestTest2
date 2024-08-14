import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'products' })
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column("int")
    qty: number;

    @Column()
    price: number;
}