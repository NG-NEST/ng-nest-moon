import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepositoryService } from '../../common/services/repository.service';
import { ResultList } from '../../common/interfaces/result.interface';
import { Control } from '../entities/control.entity';

export interface ControlQuery {
    name?: string;
    pageId?: string;
}

@Injectable()
export class ControlService extends RepositoryService<Control> {

    constructor(
        @InjectRepository(Control)
        private readonly entityRepository: Repository<Control>
    ) {
        super(entityRepository);
    }

    async findAll(index: number, size: number, query: ControlQuery): Promise<ResultList<Control>> {
        return new Promise<ResultList<Control>>(async (x) => {
            let querys = this.entityRepository
                .createQueryBuilder('control')
                .leftJoin("control.page", "page")
            if (query.name) querys.andWhere("control.name like '%:name%'", { name: query.name })
            if (query.pageId) querys.andWhere("page.id=:id", { id: query.pageId })
            let result: ResultList<Control> = {
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
