import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../services/users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.user({ id });
  }

  @Post('user')
  async createUser(@Body() data: CreateUserDto): Promise<UserModel> {
    return this.usersService.createUser(data);
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.deleteUser({ id });
  }
}
