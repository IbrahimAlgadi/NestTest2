import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entity/users.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {PhotoEntity} from "../photos/entity/photos.entity";
import {User} from "./interface/user.interface";
import {CreateUserDto} from "./dto/create-user.dto";
import {Photo} from "../photos/interface/photo.interface";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
        @InjectRepository(PhotoEntity)
        private readonly photosRepository: Repository<PhotoEntity>,
    ) {
    }

    async create(user: CreateUserDto): Promise<User> {
        //
        return await this.usersRepository.save(user);
        // let savedPhotos = []
        // if (Array.isArray(user.photos) && user.photos.length) {
        //     savedPhotos = await this.photosRepository.save(user.photos)
        // }
        // const savedUser = new UserEntity()
        // savedUser.email = user.email;
        // savedUser.password = user.password;
        // savedUser.photos = savedPhotos;
        // await this.usersRepository.save(savedUser)
        //
        // return { ...savedUser, photos: savedPhotos }
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find({relations: ['photos']})
    }

    async findOne(id: number): Promise<User> {
        return this.usersRepository.findOne({where: {id}, relations: ['photos']})
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.usersRepository.delete(id)
    }

    async update(id: number, user: UpdateUserDto): Promise<UpdateResult> {
        return this.usersRepository.update(id, user)
    }

}
