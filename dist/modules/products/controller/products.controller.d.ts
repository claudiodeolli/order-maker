import { Product as ProductModel } from '@prisma/client';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductService } from '../services/products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductService);
    getProductById(id: string): Promise<ProductModel>;
    createProduct(data: CreateProductDto): Promise<ProductModel>;
}
