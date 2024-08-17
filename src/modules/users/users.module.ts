import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';
import { UsersController } from './controller/users.controller';
import { UsersService } from './services/users.service';
import { IsEmailUnique } from 'src/common/validators/is-email-unique.validator';
import { UsersRepositoryService } from './repositories/users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    UsersService,
    UsersRepositoryService,
    IsEmailUnique,
  ],
  exports: [IsEmailUnique],
})
export class UsersModule {}
