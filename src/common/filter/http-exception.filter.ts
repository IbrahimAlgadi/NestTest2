import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {Request, Response} from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const statusCode = exception.getStatus();
        console.log(request.url)
        console.log(statusCode)
        // console.log(request.url)
        return response.status(statusCode).json({
            statusCode: statusCode,
            timestamp: new Date().toISOString(),
            path: request.url
        })
        // throw new Error("Method not implemented");
    }

}