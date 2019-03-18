import { Controller, UseGuards, Get, Param, Put, Body } from '@nestjs/common';
import { ControllerService } from '../../common/services/controller.service';
import { Table } from '../entities/table.entity';
import { TableService } from '../services/table.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('tables')
@UseGuards(AuthGuard('jwt'))
export class TableController extends ControllerService<Table> {

    constructor(private readonly entityService: TableService) {
        super(entityService)
    }

    @Get('/findByCode/:moduleCode/:tableCode')
    async findByCode(
        @Param('moduleCode') moduleCode: string,
        @Param('tableCode') tableCode: string): Promise<Table> {
        return this.entityService.findByCode(moduleCode, tableCode);
    }

    @Put('/updateTransform')
    async updateTransform(@Body() entity: any): Promise<void> {
        return this.entityService.updateTransform(entity);
    }
}
