import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepositoryService } from '../../../common/services/repository.service';
import { Role } from '../entities/role.entity';

@Injectable()
export class RolesService extends RepositoryService<Role> {

    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>
    ) { 
        super(roleRepository);
    }
}
