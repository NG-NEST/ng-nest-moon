import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module as M } from './entities/module.entity';
import { ModuleService } from './services/module.service';
import { ModuleController } from './module.controller';

@Module({
    imports:[
        TypeOrmModule.forFeature([M])
    ],
    controllers: [ModuleController],
    providers: [ModuleService]
})
export class ModuleModule { }
