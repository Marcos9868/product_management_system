import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  productName: string;
  @Column('text')
  description: string;
  @Column('double precision')
  price: number;
}
