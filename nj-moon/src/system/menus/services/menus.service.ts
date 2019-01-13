import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, EntityManager, Like } from 'typeorm';
import { RepositoryService } from '../../../common/services/repository.service';
import { Menu } from '../entities/menu.entity';
import * as _ from 'lodash';

@Injectable()
export class MenusService extends RepositoryService<Menu> {

    constructor(
        @InjectRepository(Menu)
        private readonly entityRepository: Repository<Menu>
    ) {
        super(entityRepository);
    }

    async create(entity: Menu): Promise<Menu> {
        let parent = await this.entityRepository.findOne(entity.parentId);
        let menu = await this.entityRepository.save(entity);
        menu.path = parent ? `${parent.path}.${menu.id}` : `${menu.id}`;
        return await this.entityRepository.save(menu);
    }

    async remove(id: string): Promise<void> {
        let remove = await this.entityRepository.findOne(id);
        let moves = await this.entityRepository.find({ where: { path: Like(`${remove.path}%`) } })
        moves = _.orderBy(moves, (x) => -x.path.length);
        return await getManager().transaction(async x => {
            moves.forEach(async y => await x.remove(y));
        })
    }
}
