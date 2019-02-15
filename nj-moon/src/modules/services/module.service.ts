import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepositoryService } from '../../common/services/repository.service';
import { ResultList } from '../../common/interfaces/result.interface';
import { Module } from '../entities/module.entity';

export interface ModuleQuery {
    name: string;
}

@Injectable()
export class ModuleService extends RepositoryService<Module> {

    constructor(
        @InjectRepository(Module)
        private readonly entityRepository: Repository<Module>
    ) { 
        super(entityRepository);
    }

    async findAll(index: number, size: number, query: ModuleQuery): Promise<ResultList<Module>> {
        return new Promise<ResultList<Module>>(async (x) => {
            let querys = this.entityRepository
                .createQueryBuilder('module')
            if (query.name) {
                querys = querys.where("module.name like '%:name%'", { name: query.name })
            }
            let result: ResultList<Module> = {
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
