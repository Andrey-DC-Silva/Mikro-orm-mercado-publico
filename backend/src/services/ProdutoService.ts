import { EntityManager } from '@mikro-orm/core';
import { Produto } from '../entities/Produto.js';

export class ProdutoService {
  constructor(private em: any) {}

  async listarProdutos() {
    return this.em.find(Produto, {});
  }

  async buscarProduto(id: number) {
    return this.em.findOneOrFail(Produto, { id });
  }

  async criarProduto(data: any) {
    const produto = this.em.create(Produto, data);
    await this.em.persistAndFlush(produto);
    return produto;
  }

  async atualizarProduto(id: number, data: any) {
    const produto = await this.em.findOneOrFail(Produto, { id });
    this.em.assign(produto, data);
    await this.em.persistAndFlush(produto);
    return produto;
  }

  async deletarProduto(id: number) {
    const produto = await this.em.findOneOrFail(Produto, { id });
    await this.em.removeAndFlush(produto);
  }
}