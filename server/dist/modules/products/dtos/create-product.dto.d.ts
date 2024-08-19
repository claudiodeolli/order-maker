import { Prisma, Status } from '@prisma/client';
export declare class CreateProductDto {
    name: string;
    identifier: number;
    price: string;
    status: Status;
    user: Prisma.UserCreateNestedOneWithoutProductsInput;
}
