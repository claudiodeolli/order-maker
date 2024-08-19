import { PrismaService } from '../database/prisma.service';
export declare class UsersSeed {
    private readonly prisma;
    constructor(prisma: PrismaService);
    seed(): Promise<void>;
}
