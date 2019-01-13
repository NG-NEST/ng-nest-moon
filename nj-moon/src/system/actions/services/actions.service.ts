import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepositoryService } from '../../../common/services/repository.service';
import { Action } from '../entities/action.entity';

@Injectable()
export class ActionsService extends RepositoryService<Action> {

    constructor(
        @InjectRepository(Action)
        private readonly entityRepository: Repository<Action>
    ) { 
        super(entityRepository);
    }
}
