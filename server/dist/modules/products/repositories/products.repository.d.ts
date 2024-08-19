import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
export declare class ProductRepositoryService {
    private prisma;
    constructor(prisma: PrismaService);
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
