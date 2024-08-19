import { Prisma, Product, Status } from '@prisma/client';
import { ProductRepositoryService } from '../repositories/products.repository';
import { UpdateProductsStatusDto } from '../dtos/update-product-status-bulk.dto';
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
    updateProductsMass(dto: UpdateProductsStatusDto): Promise<any>;
    updateProductStatus(id: string, status: Status): Promise<Product>;
}
