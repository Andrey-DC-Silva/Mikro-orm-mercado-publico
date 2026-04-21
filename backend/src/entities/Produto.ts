import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'produtos'} )
export class Produto {

  @PrimaryKey({ type: 'number' })
  id!: number;

  @Property({ type: 'string' })
  nome!: string;

  @Property({ type: 'decimal', precision: 10, scale: 2 })
  preco!: number;

  @Property({ type: 'number' })
  estoque!: number;

}