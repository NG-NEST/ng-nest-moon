import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiErrorCode } from '../../../common/enums/api-error-code.enum';
import { Role } from '../../../system/roles/entities/role.entity';
import { Organization } from '../../../system/organization/entities/organization.entity';

export class UserDto {
    @IsNotEmpty({ message: '用户姓名是必不可少的', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    name: string;
    @IsNotEmpty({ message: '用户密码是必不可少的', context: { errorCode: ApiErrorCode.USER_PASSWORD_INVALID } })
    password: string;
    email: string;
    phone: string;
    roles: Role[];
    organizations: Organization[];
}

export class LoginDto {
    @IsNotEmpty({ message: '用户账号是必不可少的', context: { errorCode: ApiErrorCode.USER_ACCOUNT_INVALID } })
    account: string;
    @IsNotEmpty({ message: '用户密码是必不可少的', context: { errorCode: ApiErrorCode.USER_PASSWORD_INVALID } })
    password: string;
}

export class CreateUserDto extends UserDto {
    @IsNotEmpty({ message: '用户账号是必不可少的', context: { errorCode: ApiErrorCode.USER_ACCOUNT_INVALID } })
    account: string;
}

export class UpdateUserDto extends UserDto {
    @IsNotEmpty({ message: '用户ID是必不可少的', context: { errorCode: ApiErrorCode.USER_ACCOUNT_INVALID } })
    id: number;
}