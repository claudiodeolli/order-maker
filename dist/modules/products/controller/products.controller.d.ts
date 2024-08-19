import { Prisma, Product as ProductModel } from '@prisma/client';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductsStatusDto } from '../dtos/update-product-status-bulk.dto';
import { ProductService } from '../services/products.service';
import { UpdateProductStatusDto } from '../dtos/update-product-status.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductService);
    getProductById(id: string): Promise<ProductModel>;
    getProducts(params: {
        skip?: string;
        take?: string;
        cursor?: Prisma.ProductWhereUniqueInput;
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByWithRelationInput;
    }): Promise<ProductModel[]>;
    createProduct(data: CreateProductDto): Promise<ProductModel>;
    updateProduct(id: string, data: UpdateProductDto): Promise<ProductModel>;
    updateProductsMass(dto: UpdateProductsStatusDto): Promise<any>;
    updateProductStatus(id: string, updateProductStatusDto: UpdateProductStatusDto): Promise<ProductModel>;
    getFilteredProducts(searchString: string): Promise<ProductModel[]>;
    deleteProduct(id: string): Promise<ProductModel>;
}
