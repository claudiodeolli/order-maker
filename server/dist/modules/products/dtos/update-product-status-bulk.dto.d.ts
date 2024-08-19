import { Status } from '@prisma/client';
declare class UpdateProductStatus {
    id: string;
    status: Status;
}
export declare class UpdateProductsStatusDto {
    products: UpdateProductStatus[];
}
export {};
