import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductRepositoryService } from '../repositories/products.repository';

@Injectable()
export class ProductService {
  constructor(private productRepositoryService: ProductRepositoryService) {}

  async product(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return this.productRepositoryService.product(productWhereUniqueInput);
  }

  async products(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<Product[]> {
    return this.productRepositoryService.products(params);
  }

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.productRepositoryService.createProduct(data);
  }

  async updateProduct(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    return this.productRepositoryService.updateProduct(params);
  }

  async deleteProduct(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
    return this.productRepositoryService.deleteProduct(where);
  }
}
