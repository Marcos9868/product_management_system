import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  readonly productName: string;

  @IsOptional()
  readonly description: string;

  @IsOptional()
  readonly price: number;
}
