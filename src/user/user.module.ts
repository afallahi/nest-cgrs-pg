import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { User } from 'src/entities/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetUsersHandler } from './queries/handlers/get-users.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { SaveUserHandler } from './commands/handler/save-user.handler';

@Module({
    imports:[TypeOrmModule.forFeature([User]), CqrsModule],
    controllers: [UserController],
    providers:[GetUsersHandler, SaveUserHandler]
})
export class UserModule {}
