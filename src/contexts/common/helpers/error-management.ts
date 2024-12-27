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
  const isNullish = (value: any) =>
    value === null ||
    value === undefined ||
    value === '' ||
    (typeof value === 'object' && Object.keys(value).length === 0);

  const isErrorNullish = isNullish(body.error);
  const isStackNullish = isNullish(body.stack);
  const { error, stack } = body;

  if (!isErrorNullish && !isStackNullish) {
    if (typeof error === 'string') {
      return new HttpException({ error, stack }, HttpStatus.INTERNAL_SERVER_ERROR);
    } else if (typeof error === 'object') {
      const { message, name, status } = error;

      return new HttpException(
        { message, name, status, stack },
        status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  if (!isErrorNullish && isStackNullish) {
    return new HttpException({ error }, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  if (isErrorNullish && !isStackNullish) {
    return new HttpException({ stack }, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  return new HttpException('Unknown error', HttpStatus.INTERNAL_SERVER_ERROR);
};
