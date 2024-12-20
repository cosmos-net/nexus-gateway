import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line sort-imports
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  constructor(private readonly config: ConfigService) {}

  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse() as Record<string, string>;
    const isProduction = this.config.get<string>('servers.serverEnv') === 'production';

    const { message, name, stack } = exceptionResponse;

    this.logger.error('====================================================');
    this.logger.error(`Error HTTP Status: ${status}`);
    this.logger.error(`Error endpoint: ${request.url}`);
    this.logger.error(`Error method: ${request.method}`);
    this.logger.error(`Error message: ${message}`);
    this.logger.error(`Error name: ${name}`);
    this.logger.error(`Error stack: ${stack}`);
    this.logger.error('====================================================');

    response.status(status).json({
      statusCode: status,
      errors: {
        name,
        message,
      },
      data: {},
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      ...(!isProduction && { stack: exception.stack }),
    });
  }
}
