import { PrismaService } from '../database/prisma.service';
export declare class ProductsSeed {
    private readonly prisma;
    constructor(prisma: PrismaService);
    seed(): Promise<void>;
}
