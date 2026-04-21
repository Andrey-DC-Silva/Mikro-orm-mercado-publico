"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const Usuario_js_1 = require("../entities/Usuario.js");
const Produto_js_1 = require("../entities/Produto.js");
const Pedido_js_1 = require("../entities/Pedido.js");
const ItemPedido_js_1 = require("../entities/ItemPedido.js");
class PedidoService {
    em;
    constructor(em) {
        this.em = em;
    }
    async criarPedido(usuarioId, itens) {
        if (!itens.length) {
            throw new Error('Pedido deve ter ao menos um item');
        }
        return this.em.transactional(async (em) => {
            const usuario = await em.findOneOrFail(Usuario_js_1.Usuario, usuarioId);
            const pedido = new Pedido_js_1.Pedido();
            pedido.usuario = usuario;
            pedido.total = 0;
            for (const item of itens) {
                const produto = await em.findOneOrFail(Produto_js_1.Produto, item.produtoId);
                if (produto.estoque < item.quantidade) {
                    throw new Error(`Estoque insuficiente para ${produto.nome}`);
                }
                produto.estoque -= item.quantidade;
                const itemPedido = new ItemPedido_js_1.ItemPedido();
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
        return this.em.find(Pedido_js_1.Pedido, {}, { populate: ['itens', 'usuario'] });
    }
    async buscarPedido(id) {
        return this.em.findOne(Pedido_js_1.Pedido, { id }, { populate: ['itens', 'usuario'] });
    }
    async atualizarPedido(id, data) {
        const pedido = await this.em.findOneOrFail(Pedido_js_1.Pedido, { id });
        this.em.assign(pedido, data);
        await this.em.persistAndFlush(pedido);
        return pedido;
    }
    async deletarPedido(id) {
        const pedido = await this.em.findOneOrFail(Pedido_js_1.Pedido, { id });
        await this.em.removeAndFlush(pedido);
    }
}
exports.PedidoService = PedidoService;
//# sourceMappingURL=PedidoService.js.map