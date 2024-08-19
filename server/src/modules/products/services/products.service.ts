import { Injectable } from '@nestjs/common';
import { Prisma, Product, Status } from '@prisma/client';
import { ProductRepositoryService } from '../repositories/products.repository';
import { UpdateProductsStatusDto } from '../dtos/update-product-status-bulk.dto';

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

  async updateProductsMass(dto: UpdateProductsStatusDto): Promise<any> {
    const updatePromises = dto.products.map((product) =>
      this.productRepositoryService.updateProduct({
        where: { id: product.id },
        data: { status: product.status },
      }),
    );
    return Promise.all(updatePromises);
  }

  async updateProductStatus(id: string, status: Status): Promise<Product> {
    return this.productRepositoryService.updateProduct({
      where: { id },
      data: { status },
    });
  }
}
