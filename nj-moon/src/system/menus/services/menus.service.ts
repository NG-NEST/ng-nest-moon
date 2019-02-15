import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, EntityManager, Like, ObjectID } from 'typeorm';
import { RepositoryService } from '../../../common/services/repository.service';
import { Menu } from '../entities/menu.entity';
import * as _ from 'lodash';
import { Action } from '../../../system/actions/entities/action.entity';

@Injectable()
export class MenusService extends RepositoryService<Menu> {

    constructor(
        @InjectRepository(Menu)
        private readonly menuRepository: Repository<Menu>,
        @InjectRepository(Action)
        private readonly actionRepository: Repository<Action>
    ) {
        super(menuRepository);
    }

    async findOne(id: string | number | Date | ObjectID): Promise<Menu> {
        return await this.menuRepository.findOne(id, { relations: ['actions'] });
    }

    async create(entity: Menu): Promise<Menu> {
        let parent = await this.menuRepository.findOne(entity.parentId);
        return await getManager().transaction<Menu>(async x => {
            entity.path = parent ? `${parent.path}.${entity.id}` : `${entity.id}`;
            let result = await this.menuRepository.save(entity);
            entity.actions.forEach(async y => await this.actionRepository.save(y));
            return result;
        })
    }

    async update(entity: Menu): Promise<Menu> {
        let find = await this.menuRepository.findOne(entity.id, { relations: ['actions'] });
        if (find) {
            return await getManager().transaction(async x => {
                let removeActions = _.filter(find.actions, y => !_.find(entity.actions, z => y.id == z.id)) as Action[];
                let addActions = _.filter(entity.actions, y => !_.find(find.actions, z => y.id == z.id)) as Action[];
                if (removeActions.length > 0) await this.actionRepository.remove(removeActions);
                if (addActions.length > 0) addActions.forEach(async y => await this.actionRepository.save(y));
                Object.assign(find, entity);
                let result = await this.menuRepository.save(find);
                return result
            })
        }
    }

    async remove(id: string): Promise<void> {
        let remove = await this.menuRepository.findOne(id);
        let moves = await this.menuRepository.find({ where: { path: Like(`${remove.path}%`) } })
        moves = _.orderBy(moves, (x) => -x.path.length);
        return await getManager().transaction(async x => {
            moves.forEach(async y => await x.remove(y));
        })
    }
}
