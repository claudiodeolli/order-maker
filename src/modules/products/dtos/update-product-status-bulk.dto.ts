import { Status } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';

class UpdateProductStatus {
  @IsNotEmpty()
  id: string;

  @IsEnum(Status)
  status: Status;
}

export class UpdateProductsStatusDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateProductStatus)
  products: UpdateProductStatus[];
}
