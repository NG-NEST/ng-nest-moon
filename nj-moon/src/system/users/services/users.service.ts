import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';
import { User } from '../entities/user.entity';
import { RepositoryService } from '../../../common/services/repository.service';
import { ResultList } from '../../../common/interfaces/result.interface';
import * as _ from 'lodash';

export interface UserQuery {
    organizationId: string;
}

@Injectable()
export class UsersService extends RepositoryService<User> {

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) {
        super(usersRepository);
    }

    async findAll(index: number, size: number, query: UserQuery): Promise<ResultList<User>> {
        return new Promise<ResultList<User>>(async (x) => {
            let querys = this.usersRepository
                .createQueryBuilder('user')
                .leftJoin("user.organizations", "organization")
            if (query.organizationId) {
                querys = querys.where("organization.id = :id", { id: query.organizationId })
            }
            let users = await querys.skip(size * (index - 1)).take(size).getMany();
            let result: ResultList<User> = {
                list: await this.usersRepository.find({
                    where: _.map(users, x => ({ id: x.id })),
                    relations: ['roles', 'organizations'],
                    // join: {
                    //     alias: "user",
                    //     leftJoinAndSelect: {

                    //     }
                    // }
                }),
                count: await querys.getCount(),
                query: {
                    index: index,
                    size: size
                }
            }
            x(result);
        })
    }

    async findOne(id: string | number | Date | ObjectID): Promise<User> {
        return await this.usersRepository.findOne(id, { relations: ['roles', 'organizations'] });
    }
}
