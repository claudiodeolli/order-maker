import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { ProductService } from './services/products.service';
import { PrismaService } from 'src/common/database/prisma.service';
import { ProductRepositoryService } from './repositories/products.repository';
import { IsIdentifierUnique } from 'src/common/validators/is-identifier-unique.validator';
import { IsOnPriceFormat } from 'src/common/validators/is-price-format.validator';

@Module({
  controllers: [ProductsController],
  providers: [
    PrismaService,
    ProductService,
    ProductRepositoryService,
    IsIdentifierUnique,
    IsOnPriceFormat,
  ],
  exports: [IsIdentifierUnique],
})
export class ProductssModule {}
