import { ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from '../database/prisma.service';
export declare class IsEmailUnique implements ValidatorConstraintInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validate(email: string): Promise<boolean>;
}
