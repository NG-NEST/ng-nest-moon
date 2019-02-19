import { Controller, UseGuards } from '@nestjs/common';
import { ControllerService } from '../../common/services/controller.service';
import { Module } from '../entities/module.entity';
import { ModuleService } from '../services/module.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('modules')
@UseGuards(AuthGuard('jwt'))
export class ModuleController extends ControllerService<Module> {

    constructor(private readonly entityService: ModuleService) {
        super(entityService)
    }
}
