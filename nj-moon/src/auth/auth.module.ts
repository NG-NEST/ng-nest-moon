import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { User } from '../system/users/entities/user.entity';
import { Menu } from 'system/menus/entities/menu.entity';


@Module({
    imports: [TypeOrmModule.forFeature([User, Menu])],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {

}