import { Prisma, Product } from '@prisma/client';
import { ProductRepositoryService } from '../repositories/products.repository';
export declare class ProductService {
    private productRepositoryService;
    constructor(productRepositoryService: ProductRepositoryService);
    product(productWhereUniqueInput: Prisma.ProductWhereUniqueInput): Promise<Product | null>;
    products(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProductWhereUniqueInput;
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByWithRelationInput;
    }): Promise<Product[]>;
    createProduct(data: Prisma.ProductCreateInput): Promise<Product>;
    updateProduct(params: {
        where: Prisma.ProductWhereUniqueInput;
        data: Prisma.ProductUpdateInput;
    }): Promise<Product>;
    deleteProduct(where: Prisma.ProductWhereUniqueInput): Promise<Product>;
}
