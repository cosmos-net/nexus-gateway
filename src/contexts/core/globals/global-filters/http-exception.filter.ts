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

    let { message, name, stack } = exceptionResponse;

    if (message === undefined) {
      message = exception.message;
    }

    if (name === undefined) {
      name = exception.name;
    }

    if (stack === undefined) {
      stack = exception.stack;
    }

    this.logger.error('====================================================');
    this.logger.error(`Error HTTP Status: ${status}`);
    this.logger.error(`Error endpoint: ${request.url}`);
    this.logger.error(`Error method: ${request.method}`);
    this.logger.error(
      `Error message: ${typeof message === 'string' ? message : JSON.stringify(message)}`,
    );
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
      ...(!isProduction && { stack }),
    });
  }
}
