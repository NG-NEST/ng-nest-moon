import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MenusModule } from 'system/menus/menus.module';

@Module({
    imports:[
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule { }
