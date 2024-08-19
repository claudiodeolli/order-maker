import { ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from '../database/prisma.service';
export declare class IsIdentifierUnique implements ValidatorConstraintInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validate(identifier: number): Promise<boolean>;
}
