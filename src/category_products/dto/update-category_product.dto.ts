import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateCategoryProductDto } from './create-category_product.dto';

export class UpdateCategoryProductDto extends PartialType(CreateCategoryProductDto) {
  @IsOptional()
  categoryName: string;
  @IsOptional()
  description: string;
}
