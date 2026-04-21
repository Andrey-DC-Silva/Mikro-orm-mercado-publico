import { EntityRepository } from '@mikro-orm/postgresql';
import { Pedido } from '../entities/Pedido.js';

export class PedidoRepository extends EntityRepository<Pedido> {}