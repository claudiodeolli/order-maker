import { Status } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductStatusDto {
  @IsNotEmpty()
  @IsString()
  status: Status;
}
