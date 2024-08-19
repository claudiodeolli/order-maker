import { Prisma, Status } from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Max,
  Validate,
} from 'class-validator';
import { IsIdentifierUnique } from 'src/common/validators/is-identifier-unique.validator';
import { IsOnPriceFormat } from 'src/common/validators/is-price-format.validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @IsInt()
  @IsOptional()
  @Max(9999999999)
  @Validate(IsIdentifierUnique)
  identifier: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @Validate(IsOnPriceFormat)
  price: string;

  @IsEnum(Status)
  status: Status;

  @IsOptional()
  user: Prisma.UserCreateNestedOneWithoutProductsInput;
}
