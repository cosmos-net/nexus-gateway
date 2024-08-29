import { HttpException, HttpStatus } from '@nestjs/common';

interface IError {
  message?: string;
  name?: string;
  status?: number;
}

interface IBodyResponse {
  stack?: string;
  error?: IError | string;
}

export const recoverErrorType = (body: IBodyResponse): HttpException => {
  if (typeof body.error === 'string') {
    return new HttpException(body.error, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  const {
    stack,
    error: { message, name, status },
  } = body;
  return new HttpException({ message, name, stack }, status);
};
