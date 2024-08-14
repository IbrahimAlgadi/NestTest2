import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entity/users.entity";
import {PhotoEntity} from "../photos/entity/photos.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([
          UserEntity,
          PhotoEntity
      ])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
