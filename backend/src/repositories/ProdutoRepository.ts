import { EntityRepository } from '@mikro-orm/core';
import { Produto } from '../entities/Produto.js';

export class ProdutoRepository extends EntityRepository<Produto> {}