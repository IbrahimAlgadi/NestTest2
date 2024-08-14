import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PhotoEntity} from "../../photos/entity/photos.entity";


@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(type => PhotoEntity, photosEntity => photosEntity.user, {
        cascade: ['insert', 'update'],
        onDelete: "CASCADE",
    })
    photos: PhotoEntity[]
}