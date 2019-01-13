import { Controller, UseGuards } from '@nestjs/common';
import { ControllerService } from '../../common/services/controller.service';
import { Menu } from './entities/menu.entity';
import { MenusService } from './services/menus.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('menus')
@UseGuards(AuthGuard('jwt'))
export class MenusController extends ControllerService<Menu> {

    constructor(private readonly usersService: MenusService) {
        super(usersService)
    }

}
