import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TransformDataBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.body = {
      ...req.params,
      ...req.query,
      ...req.body,
    };

    next();
  }
}
