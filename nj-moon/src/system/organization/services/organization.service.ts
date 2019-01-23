import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, Like, ObjectID } from 'typeorm';
import { RepositoryService } from '../../../common/services/repository.service';
import { Organization } from '../entities/organization.entity';
import * as _ from 'lodash';

@Injectable()
export class OrganizationService extends RepositoryService<Organization> {

    constructor(
        @InjectRepository(Organization)
        private readonly organizationRepository: Repository<Organization>
    ) {
        super(organizationRepository);
    }

    async findOne(id: string | number | Date | ObjectID): Promise<Organization> {
        return await this.organizationRepository.findOne(id);
    }

    async create(entity: Organization): Promise<Organization> {
        let parent = await this.organizationRepository.findOne(entity.parentId);
        return await getManager().transaction<Organization>(async x => {
            entity.path = parent ? `${parent.path}.${entity.id}` : `${entity.id}`;
            let result = await this.organizationRepository.save(entity);
            return result;
        })
    }

    async update(entity: Organization): Promise<Organization> {
        let find = await this.organizationRepository.findOne(entity.id);
        if (find) {
            return await getManager().transaction(async x => {
                Object.assign(find, entity);
                let result = await this.organizationRepository.save(find);
                return result
            })
        }
    }

    async remove(id: string): Promise<void> {
        let remove = await this.organizationRepository.findOne(id);
        let moves = await this.organizationRepository.find({ where: { path: Like(`${remove.path}%`) } })
        moves = _.orderBy(moves, (x) => -x.path.length);
        return await getManager().transaction(async x => {
            moves.forEach(async y => await x.remove(y));
        })
    }
}
