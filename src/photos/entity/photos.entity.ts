import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../../users/entity/users.entity";


@Entity({ name: 'photos' })
export class PhotoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(type => UserEntity, userEntity => userEntity.photos, {
        onDelete: "CASCADE"
    })
    user: UserEntity
}