import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UsersRepositoryService } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepositoryService: UsersRepositoryService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.usersRepositoryService.user(userWhereUniqueInput);
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    return this.usersRepositoryService.users(params);
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.usersRepositoryService.createUser(data);
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    return this.usersRepositoryService.updateUser(params);
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.usersRepositoryService.deleteUser(where);
  }
}
