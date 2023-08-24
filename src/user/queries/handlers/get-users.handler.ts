import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUsersQuery } from '../impl/get-users.query';
import { User } from 'src/entities/user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
      ) {}

    async execute(query: GetUsersQuery): Promise<User[]> {
        return await this.userRepository.find();
    }
}
