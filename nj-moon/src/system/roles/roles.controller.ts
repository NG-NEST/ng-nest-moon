import { Controller, UseGuards } from '@nestjs/common';
import { ControllerService } from '../../common/services/controller.service';
import { Role } from './entities/role.entity';
import { RolesService } from './services/roles.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('roles')
@UseGuards(AuthGuard('jwt'))
export class RolesController extends ControllerService<Role> {

    constructor(entitySservice: RolesService) {
        super(entitySservice)
    }
}
