import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { UsuarioRepository } from '../repositories/UsuarioRepository.js';
import { Pedido } from './Pedido.js';
 
@Entity({ tableName: 'usuarios', repository: () => UsuarioRepository })
export class Usuario {

  @PrimaryKey({ type: 'number' })
  id!: number;

  @Property({ type: 'string' })
  nome!: string;

  @Property({ type: 'string' })
  email!: string;

  @OneToMany(() => Pedido, pedido => pedido.usuario)
  pedidos = new Collection<Pedido>(this);

}