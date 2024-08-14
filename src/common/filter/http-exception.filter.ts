import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {Request, Response} from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const statusCode = exception.getStatus();
        const errorResponse = exception.getResponse();
        // console.log(exception)
        // console.log(statusCode)
        // console.log(request.url)
        return response.status(statusCode).json({
            errorResponse,
            // statusCode: statusCode,
            timestamp: new Date().toISOString(),
            path: request.url,
            // exceptionResponse: exceptionResponse
        })
        // throw new Error("Method not implemented");
    }

}