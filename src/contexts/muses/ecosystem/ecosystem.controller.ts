import { Body, Controller, Delete, Get, HttpException, Inject, InternalServerErrorException, Logger, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MUSES_ECOSYSTEM_MODULE, MUSES_ECOSYSTEM_CREATE, MUSES_ECOSYSTEM_DISABLE, MUSES_ECOSYSTEM_GET, MUSES_ECOSYSTEM_LIST, MUSES_ECOSYSTEM_UPDATE } from '@muses/ecosystem/constants';
import { lastValueFrom } from 'rxjs';

@Controller('muses-context/v1/ecosystem-module')
export class EcosystemController {
  constructor(
    @Inject('NATS_SERVICE')
    private clientProxy: ClientProxy
  ) {}

  private readonly logger = new Logger(EcosystemController.name);

  @Post()
  async create(@Body() input: any): Promise<any> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: MUSES_ECOSYSTEM_CREATE }, input)
      );

      return output;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Patch()
  async update(input: any): Promise<any> {
    try {
      const output = await this.clientProxy.send(MUSES_ECOSYSTEM_UPDATE, input);

      return output;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      const err = error as Error;
      this.logger.error(err.message, err.stack);
      throw new InternalServerErrorException(err.message, err.name);
    }
  }

  @Get()
  async get(input: any): Promise<any> {
    try {
      const output = await this.clientProxy.send(MUSES_ECOSYSTEM_GET, input);

      return output;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      const err = error as Error;
      this.logger.error(err.message, err.stack);
      throw new InternalServerErrorException(err.message, err.name);
    }
  }

  @Get('list')
  async list(input: any): Promise<any> {
    try {
      const output = await this.clientProxy.send(MUSES_ECOSYSTEM_LIST, input);

      return output;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      const err = error as Error;
      this.logger.error(err.message, err.stack);
      throw new InternalServerErrorException(err.message, err.name);
    }
  }

  @Delete()
  async disable(input: any): Promise<any> {
    try {
      const output = await this.clientProxy.send(MUSES_ECOSYSTEM_DISABLE, input);

      return output;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      const err = error as Error;
      this.logger.error(err.message, err.stack);
      throw new InternalServerErrorException(err.message, err.name);
    }
  }
}
