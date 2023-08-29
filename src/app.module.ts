import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './entities/user';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: (process.env.IS_CLOUD === 'true') ? process.env.DB_HOST_CLOUD : process.env.DB_HOST_LOCAL,
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER,
      password: (process.env.IS_CLOUD === 'true') ? process.env.DB_PASSWORD_CLOUD : process.env.DB_PASSWORD_LOCAL,
      database: (process.env.IS_CLOUD === 'true') ? process.env.DB_NAME_CLOUD : process.env.DB_NAME_LOCAL,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      entities:[User]
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
