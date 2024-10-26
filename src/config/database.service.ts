import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './database.config';

@Injectable()
export class DatabaseService {
  constructor(private configService: ConfigService) {}

  getTypeOrmConfig(): Promise<TypeOrmModuleOptions> {
    return getTypeOrmConfig(this.configService);
  }
}
