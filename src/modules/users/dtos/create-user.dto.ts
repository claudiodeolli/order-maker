import { Prisma } from '@prisma/client';
import {
  ArrayMaxSize,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Validate,
} from 'class-validator';
import { IsEmailUnique } from 'src/common/validators/is-email-unique.validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Validate(IsEmailUnique)
  @Length(5, 100)
  email: string;

  @IsOptional()
  @ArrayMaxSize(300)
  products?: Prisma.ProductCreateNestedManyWithoutUserInput;
}
