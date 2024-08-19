import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Prisma, Product as ProductModel } from '@prisma/client';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductsStatusDto } from '../dtos/update-product-status-bulk.dto';
import { ProductService } from '../services/products.service';
import { UpdateProductStatusDto } from '../dtos/update-product-status.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get('product/:id')
  async getProductById(@Param('id') id: string): Promise<ProductModel> {
    return this.productService.product({ id });
  }

  @Get('products')
  async getProducts(
    @Query()
    params: {
      skip?: string;
      take?: string;
      cursor?: Prisma.ProductWhereUniqueInput;
      where?: Prisma.ProductWhereInput;
      orderBy?: Prisma.ProductOrderByWithRelationInput;
    },
  ): Promise<ProductModel[]> {
    const { take, skip, cursor, where, orderBy } = params;

    return this.productService.products({
      skip: skip ? Number(skip) : 0,
      take: take ? Number(take) : 10,
      cursor,
      where,
      orderBy,
    });
  }

  @Post('product')
  async createProduct(@Body() data: CreateProductDto): Promise<ProductModel> {
    return this.productService.createProduct(data);
  }

  @Patch('product/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() data: UpdateProductDto,
  ): Promise<ProductModel> {
    return this.productService.updateProduct({ where: { id }, data });
  }

  @Post('products/update-mass')
  async updateProductsMass(@Body() dto: UpdateProductsStatusDto): Promise<any> {
    return this.productService.updateProductsMass(dto);
  }

  @Post('product/:id/status')
  async updateProductStatus(
    @Param('id') id: string,
    @Body() updateProductStatusDto: UpdateProductStatusDto,
  ): Promise<ProductModel> {
    return this.productService.updateProductStatus(
      id,
      updateProductStatusDto.status,
    );
  }

  @Get('filtered-products/:searchString')
  async getFilteredProducts(
    @Param('searchString') searchString: string,
  ): Promise<ProductModel[]> {
    return this.productService.products({
      where: {
        name: {
          contains: searchString,
        },
      },
    });
  }

  @Delete('product/:id')
  async deleteProduct(@Param('id') id: string): Promise<ProductModel> {
    return this.productService.deleteProduct({ id });
  }
}
