import { Module } from '@nestjs/common';
import { ProductssModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaService } from './common/database/prisma.service';

@Module({
  imports: [ProductssModule, UsersModule],
  providers: [PrismaService],
})
export class AppModule {}
