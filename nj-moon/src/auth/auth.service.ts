import { Injectable, HttpStatus } from '@nestjs/common'
import { Repository } from 'typeorm';
import { JwtPayload } from './jwt-payload.interface'
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../system/users/entities/user.entity';
import { ApiException } from 'common/exceptions/api.exception';
import { ApiErrorCode } from 'common/enums/api-error-code.enum';
import { Menu } from 'system/menus/entities/menu.entity';

@Injectable()
export class AuthService {
    user: User;
    expires: number = 3600
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Menu)
        private readonly menuRepository: Repository<Menu>
        ) { }

    async createToken(account: string, password: string): Promise<any> {
        const user: JwtPayload = { account: account, password: password }
        return jwt.sign(user, 'secretKey', { expiresIn: this.expires });
    }

    async validateAccount(payload: JwtPayload): Promise<any> {
        return this.userRepository.findOne({ account: payload.account });
    }

    async finduserByAccount(account: string): Promise<User> {
        return this.userRepository.findOne({ account: account });
    }

    async menus(): Promise<Menu[]>{
        return this.menuRepository.find();
    }

    async login(account: string, password: string): Promise<any> {
        this.user = await this.userRepository.findOne({ account: account });
        if (this.user != undefined && this.user.password == password) {
            return new Promise((x, y) => {
                this.createToken(this.user.account, this.user.password)
                    .then(z => x({ token: z }))
                    .catch(z => y(z))
            })
        } else {
            throw new ApiException('用户账号或密码无效！', ApiErrorCode.USER_ACCOUNT_PASSWORD_INVALID, HttpStatus.BAD_REQUEST);
        }
    }
}