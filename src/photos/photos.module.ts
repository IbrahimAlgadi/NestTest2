import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PhotoEntity} from "./entity/photos.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([
          PhotoEntity
      ])
  ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
