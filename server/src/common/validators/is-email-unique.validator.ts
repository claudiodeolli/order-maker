import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaService } from '../database/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsEmailUnique', async: true })
@Injectable()
export class IsEmailUnique implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new HttpException('EMAIL_ALREADY_EXISTS', HttpStatus.BAD_REQUEST);
    }

    return true;
  }
}
