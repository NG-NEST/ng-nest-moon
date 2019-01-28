import { Injectable, HttpStatus } from '@nestjs/common'
import { Repository } from 'typeorm';
import { JwtPayload } from './jwt-payload.interface'
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../system/users/entities/user.entity';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';
import { Menu } from '../system/menus/entities/menu.entity';
import { Role } from '../system/roles/entities/role.entity';
import { Action } from '../system/actions/entities/action.entity';
import * as _ from 'lodash';

@Injectable()
export class AuthService {
    user: User;
    expires: number = 3600
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Menu)
        private readonly menuRepository: Repository<Menu>,
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
        @InjectRepository(Action)
        private readonly actionRepository: Repository<Action>
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

    async menus(): Promise<Menu[]> {
        return this.menuRepository.find();
    }

    async login(account: string, password: string): Promise<any> {
        this.user = await this.userRepository.findOne({ account: account }, { relations: ['roles'] });
        if (this.user != undefined && this.user.password == password) {
            let permissions = await this.getPermissions(this.user);
            return new Promise((x, y) => {
                this.createToken(this.user.account, this.user.password)
                    .then(z => x({ token: z, permissions: permissions }))
                    .catch(z => y(z))
            })
        } else {
            throw new ApiException('用户账号或密码无效！', ApiErrorCode.USER_ACCOUNT_PASSWORD_INVALID, HttpStatus.BAD_REQUEST);
        }
    }

    private async getPermissions(user: User): Promise<{ actions: Action[], menus: Menu[] }> {
        let actions = await this.actionRepository
            .createQueryBuilder("action")
            .innerJoin("action.roles", "role")
            .where("role.id IN (" + _.map(user.roles, x => `"${x.id}"`).join(",") + ")")
            .getMany()
        let menuIds = _.map(_.uniqBy(actions, x => x.menuId), x => x.menuId);
        let paths = await this.menuRepository
            .createQueryBuilder("menu")
            .select("menu.path")
            .where("menu.id IN (" + _.map(menuIds, x => `"${x}"`).join(",") + ")")
            .getMany();
        let ids = _.union(_.map(paths, x => _.split(x.path, ".")));
        let idss = [];
        ids.forEach(x => idss = _.union(idss, x));
        let menus = await this.menuRepository
            .createQueryBuilder("menu")
            .where("menu.id IN (" + _.map(idss, x => `"${x}"`).join(",") + ")")
            .getMany();
        return { actions: actions, menus: menus }
    }
}