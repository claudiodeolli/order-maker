import { Prisma } from '@prisma/client';
export declare class CreateUserDto {
    name: string;
    email: string;
    products?: Prisma.ProductCreateNestedManyWithoutUserInput;
}
