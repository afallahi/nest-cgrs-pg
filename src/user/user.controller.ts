import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from './queries/impl/get-users.query';
import { SaveUserCommand } from './commands/impl/save-user.command';
import { CommandBus } from '@nestjs/cqrs';

@Controller('user')
export class UserController {
    constructor(private readonly queryBus: QueryBus, private readonly commandBus:CommandBus) {}

    @Get('all')
    async getAll() {
        return await this.queryBus.execute(new GetUsersQuery());
    }

    @Post('add')
    @UsePipes(new ValidationPipe({ transform: true }))
    async createUser(@Body() newUser: SaveUserCommand) {
        return await this.commandBus.execute(newUser);
    }
}
