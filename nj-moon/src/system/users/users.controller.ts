import { Controller, Post, Put, Body, UseGuards, Get, Param } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';
import { plainToClass } from 'class-transformer';
import { UpdateUserDto, CreateUserDto } from './dtos/user.dto';
import { ControllerService } from '../../common/services/controller.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController extends ControllerService<User> {

    constructor(
        private readonly usersService: UsersService
        ) {
        super(usersService)
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<User> {
        return await this.usersService.findOne(id);
    }

    @Post()
    async create(@Body() user: CreateUserDto): Promise<User> {
        return await this.usersService.create(plainToClass(User, user));
    }

    @Put()
    async update(@Body() user: UpdateUserDto): Promise<User> {
        return await this.usersService.update(plainToClass(User, user));
    }

}
