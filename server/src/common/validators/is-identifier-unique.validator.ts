import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaService } from '../database/prisma.service';

@ValidatorConstraint({ name: 'IsEmailUnique', async: true })
@Injectable()
export class IsIdentifierUnique implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(identifier: number): Promise<boolean> {
    const product = await this.prisma.product.findUnique({
      where: {
        identifier,
      },
    });

    if (product) {
      throw new HttpException(
        'IDENTIFIER_ALREADY_EXISTS',
        HttpStatus.BAD_REQUEST,
      );
    }

    return true;
  }
}
