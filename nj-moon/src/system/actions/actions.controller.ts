import { Controller, UseGuards } from '@nestjs/common';
import { ControllerService } from '../../common/services/controller.service';
import { Action } from './entities/action.entity';
import { ActionsService } from './services/Actions.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('Actions')
@UseGuards(AuthGuard('jwt'))
export class ActionsController extends ControllerService<Action> {

    constructor(private readonly entityService: ActionsService) {
        super(entityService)
    }

}
