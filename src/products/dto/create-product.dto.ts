import { IsOptional } from "class-validator";

export class CreateProductDto {
  readonly productName: string;

  @IsOptional()
  readonly description: string;

  @IsOptional()
  readonly price: number;

}
