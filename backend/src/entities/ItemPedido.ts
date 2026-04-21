import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Pedido } from './Pedido';
import { Produto } from './Produto';

@Entity({ tableName: 'itemPedidos' })
export class ItemPedido {

  @PrimaryKey({ type: 'number' })
  id!: number;

  @ManyToOne(() => Pedido)
  pedido!: Pedido;

  @ManyToOne(() => Produto)
  produto!: Produto;

  @Property({ type: 'number' })
  quantidade!: number;

  @Property({ type: 'decimal', precision: 10, scale: 2 })
  precoUnitario!: number;
}