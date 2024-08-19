import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserById(id: string): Promise<UserModel>;
    createUser(data: CreateUserDto): Promise<UserModel>;
    deleteUser(id: string): Promise<UserModel>;
}
