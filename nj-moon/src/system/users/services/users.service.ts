import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';
import { User } from '../entities/user.entity';
import { RepositoryService } from '../../../common/services/repository.service';

@Injectable()
export class UsersService extends RepositoryService<User> {

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) {
        super(usersRepository);
    }

    async findOne(id: string | number | Date | ObjectID): Promise<User> {
        return await this.usersRepository.findOne(id, { relations: ['roles'] });
    }
}
