import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product as ProductModel } from '@prisma/client';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductService } from '../services/products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get('product/:id')
  async getProductById(@Param('id') id: string): Promise<ProductModel> {
    return this.productService.product({ id });
  }

  @Post('product')
  async createProduct(@Body() data: CreateProductDto): Promise<ProductModel> {
    return this.productService.createProduct(data);
  }
}
