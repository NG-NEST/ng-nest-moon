import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID, getManager } from 'typeorm';
import { RepositoryService } from '../../common/services/repository.service';
import { ResultList } from '../../common/interfaces/result.interface';
import { Table } from '../entities/table.entity';
import * as _ from 'lodash';
import { Col } from '../entities/col.entity';

export interface TableQuery {
    code?: string;
    moduleId?: string;
}

@Injectable()
export class TableService extends RepositoryService<Table> {

    constructor(
        @InjectRepository(Table)
        private readonly entityRepository: Repository<Table>,
        @InjectRepository(Col)
        private readonly colRepository: Repository<Col>
    ) {
        super(entityRepository);
    }

    async findOne(id: string | number | Date | ObjectID): Promise<Table> {
        return await this.entityRepository.createQueryBuilder('table')
            .leftJoinAndSelect('table.cols', 'col')
            .where("table.id=:id", { id: id })
            .getOne();
    }

    async create(entity: Table): Promise<Table> {
        return await getManager().transaction<Table>(async x => {
            let result = await this.entityRepository.save(entity);
            if (entity.cols instanceof Array)
                entity.cols.forEach(async (y, index) => {
                    y.sort = index;
                    await this.colRepository.save(y)
                });
            return result;
        })
    }

    async update(entity: Table): Promise<Table> {
        let find = await this.entityRepository.findOne(entity.id, { relations: ['cols'] });
        entity.cols.forEach((x, i) => { x.sort = i });
        if (find) {
            return await getManager().transaction(async x => {
                let removes = _.filter(find.cols, y => !_.find(entity.cols, z => y.id == z.id)) as Col[];
                let adds = _.filter(entity.cols, y => !_.find(find.cols, z => y.id == z.id)) as Col[];
                let updates = _.filter(find.cols, y => _.find(entity.cols, z => y.id == z.id)) as Col[];
                if (removes instanceof Array) await this.colRepository.remove(removes);
                if (adds instanceof Array) adds.forEach(async y => await this.colRepository.save(y));
                if (updates instanceof Array) updates.forEach(async y => {
                    await this.colRepository.save(Object.assign(y, _.find(entity.cols, z => z.id == y.id)))
                })
                Object.assign(find, entity);
                let result = await this.entityRepository.save(find);
                return result
            })
        }
    }

    async findAll(index: number, size: number, query: TableQuery): Promise<ResultList<Table>> {
        return new Promise<ResultList<Table>>(async (x) => {
            let querys = this.entityRepository
                .createQueryBuilder('table')
                .leftJoin("table.module", "module")
            if (query.code) querys.andWhere("table.code like '%:code%'", { name: query.code })
            if (query.moduleId) querys.andWhere("module.id=:id", { id: query.moduleId })
            let result: ResultList<Table> = {
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

    async findByCode(moduleCode: string, tableCode: string): Promise<Table> {
        return this.entityRepository
            .createQueryBuilder('table')
            .leftJoinAndSelect('table.cols', 'col')
            .leftJoin("table.module", "module")
            .where("module.code=:moduleCode and table.code=:tableCode", {
                tableCode: tableCode,
                moduleCode: moduleCode
            })
            .getOne();
    }
}
