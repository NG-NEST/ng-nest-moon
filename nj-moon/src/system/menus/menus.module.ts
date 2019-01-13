import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { MenusService } from './services/menus.service';
import { MenusController } from './menus.controller';

@Module({
    imports:[
        TypeOrmModule.forFeature([Menu])
    ],
    controllers: [MenusController],
    providers: [MenusService]
})
export class MenusModule { }
