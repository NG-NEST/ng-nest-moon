import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepositoryService } from '../../common/services/repository.service';
import { ResultList } from '../../common/interfaces/result.interface';
import { Page } from '../entities/page.entity';

export interface PageQuery {
    name?: string;
    moduleId?: string;
}

@Injectable()
export class PageService extends RepositoryService<Page> {

    constructor(
        @InjectRepository(Page)
        private readonly entityRepository: Repository<Page>
    ) {
        super(entityRepository);
    }

    async findAll(index: number, size: number, query: PageQuery): Promise<ResultList<Page>> {
        return new Promise<ResultList<Page>>(async (x) => {
            let querys = this.entityRepository
                .createQueryBuilder('page')
                .leftJoin("page.module", "module")
            if (query.name) querys.andWhere("page.name like '%:name%'", { name: query.name })
            if (query.moduleId) querys.andWhere("module.id=:id", { id: query.moduleId })
            let result: ResultList<Page> = {
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
