import { Controller, UseGuards } from '@nestjs/common';
import { ControllerService } from '../../common/services/controller.service';
import { Page } from '../entities/page.entity';
import { PageService } from '../services/page.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('pages')
@UseGuards(AuthGuard('jwt'))
export class PageController extends ControllerService<Page> {

    constructor(private readonly entityService: PageService) {
        super(entityService)
    }
}
