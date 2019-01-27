import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';
import { RepositoryService } from '../../../common/services/repository.service';
import { Action } from '../entities/action.entity';
import { ResultList } from '../../../common/interfaces/result.interface';

export interface ActionQuery {
    menuId: string;
}

@Injectable()
export class ActionsService extends RepositoryService<Action> {

    constructor(
        @InjectRepository(Action)
        private readonly entityRepository: Repository<Action>
    ) { 
        super(entityRepository);
    }

    async findAll(index: number, size: number, query: ActionQuery): Promise<ResultList<Action>> {
        return new Promise<ResultList<Action>>(async (x) => {
            let querys = this.entityRepository
                .createQueryBuilder('action')
            if (query.menuId) {
                querys = querys.where("action.menuId = :id", { id: query.menuId })
            }
            let result: ResultList<Action> = {
                list: await querys.skip(size * (index - 1)).take(size).getMany(),
                count: await querys.getCount(),
                query: {
                    index: index,
                    size: size
                }
            }
            x(result);
        })
    }
}
