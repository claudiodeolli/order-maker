import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  price: string;
}
