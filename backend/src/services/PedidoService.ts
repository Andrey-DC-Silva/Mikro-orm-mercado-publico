import { EntityManager } from '@mikro-orm/core';
import { Usuario } from '../entities/Usuario.js';
import { Produto } from '../entities/Produto.js';
import { Pedido } from '../entities/Pedido.js';
import { ItemPedido } from '../entities/ItemPedido.js';

export class PedidoService {
  constructor(private em: EntityManager) {}

  async criarPedido(
    usuarioId: number,
    itens: { produtoId: number; quantidade: number }[]
  ) {
    if (!itens.length) {
      throw new Error('Pedido deve ter ao menos um item');
    }

    return this.em.transactional(async (em) => {
      const usuario = await em.findOneOrFail(Usuario, usuarioId);

      const pedido = new Pedido();
      pedido.usuario = usuario;
      pedido.total = 0;

      for (const item of itens) {
        const produto = await em.findOneOrFail(Produto, item.produtoId);

        if (produto.estoque < item.quantidade) {
          throw new Error(`Estoque insuficiente para ${produto.nome}`);
        }

        produto.estoque -= item.quantidade;

        const itemPedido = new ItemPedido();
        itemPedido.produto = produto;
        itemPedido.quantidade = item.quantidade;
        itemPedido.precoUnitario = produto.preco;
        itemPedido.pedido = pedido;

        pedido.total += produto.preco * item.quantidade;

        em.persist(produto);
        em.persist(itemPedido);
      }

      em.persist(pedido);

      return pedido;
    });
  }

  async listarPedidos() {
    return this.em.find(Pedido, {}, { populate: ['itens', 'usuario'] });
  }

  async buscarPedido(id: number) {
    return this.em.findOne(Pedido, { id }, { populate: ['itens', 'usuario'] });
  }

  async atualizarPedido(id: number, data: Partial<Pedido>) {
    const pedido = await this.em.findOneOrFail(Pedido, { id });

    this.em.assign(pedido, data);

    await this.em.persistAndFlush(pedido);

    return pedido;
  }

  async deletarPedido(id: number) {
    const pedido = await this.em.findOneOrFail(Pedido, { id });

    await this.em.removeAndFlush(pedido);
  }
}