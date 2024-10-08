import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

interface Response<T> {
  data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    // transform the response
    // map the response to data property
    // console.log(context.getClass()) -> ProductsController
    // console.log(context.getHandler()) -> create method

    return next.handle().pipe(map(data => ({ data })));
  }
}
