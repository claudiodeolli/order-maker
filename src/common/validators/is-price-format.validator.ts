import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsOnPriceFormat', async: true })
@Injectable()
export class IsOnPriceFormat implements ValidatorConstraintInterface {
  async validate(price: string): Promise<boolean> {
    const regex = /^\d+\.\d{2}$/;

    if (!regex.test(price)) {
      throw new HttpException('PRICE_FORMAT_NOT_VALID', HttpStatus.BAD_REQUEST);
    }

    return true;
  }
}
