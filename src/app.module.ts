import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductsModule} from './products/products.module';
import {LoggerMiddleware} from "./common/middlewares/logger/logger.middleware";
import {ProductsService} from "./products/products.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    // password: "",
    database: "nest_test",
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    // synchronize: false,
    synchronize: true,
  }),ProductsModule, UsersModule, PhotosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    console.log("Connection Status: ", connection.isConnected)
  }

  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(ProductsService)

    // consumer
    //     .apply(LoggerMiddleware)
    //     .forRoutes({path: "products", method: RequestMethod.GET})

    consumer
        .apply(LoggerMiddleware)
        .exclude({path: "products", method: RequestMethod.GET})
        .forRoutes(ProductsService)
  }
}
