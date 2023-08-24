import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { SaveUserCommand } from "../impl/save-user.command";
import { User } from "src/entities/user";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@CommandHandler(SaveUserCommand)
export class SaveUserHandler implements ICommandHandler<SaveUserCommand> {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
      ) {}

    async execute(command: SaveUserCommand) {
        var user = new User();
        user.age = command.age;
        user.name = command.name;
        await this.userRepository.insert(user);
    }
}
