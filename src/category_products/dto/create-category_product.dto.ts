import { IsOptional } from "class-validator";

export class CreateCategoryProductDto {
  @IsOptional()
  categoryName: string;
  @IsOptional()
  description: string;
}
