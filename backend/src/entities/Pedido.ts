import { Entity, PrimaryKey, Property, OneToMany, ManyToOne, Collection } from '@mikro-orm/core';
import { Usuario } from './Usuario.js';
import { ItemPedido } from './ItemPedido.js';

@Entity({ tableName: "pedidos" })
export class Pedido {

  @PrimaryKey({ type: 'number' })
  id!: number;

  @ManyToOne(() => Usuario)
  usuario!: Usuario;

  @Property({ type: 'decimal', precision: 10, scale: 2 })
  total!: number;

  @OneToMany(() => ItemPedido, item => item.pedido)
  itens = new Collection<ItemPedido>(this);
}