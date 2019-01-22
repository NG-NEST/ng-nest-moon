import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule { }
