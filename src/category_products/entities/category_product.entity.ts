import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CategoryProduct {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  categoryName: string;
  @Column('text')
  description: string;
}
