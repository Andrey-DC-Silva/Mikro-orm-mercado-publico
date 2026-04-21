"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
class PedidoController {
    pedidoService;
    constructor(pedidoService) {
        this.pedidoService = pedidoService;
    }
    async criar(req, res) {
        try {
            const { usuarioId, itens } = req.body;
            const pedido = await this.pedidoService.criarPedido(usuarioId, itens);
            return res.status(201).json(pedido);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async listar(req, res) {
        try {
            const pedidos = await this.pedidoService.listarPedidos();
            return res.json(pedidos);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const pedido = await this.pedidoService.buscarPedido(Number(id));
            if (!pedido) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }
            return res.json(pedido);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const pedido = await this.pedidoService.atualizarPedido(Number(id), data);
            return res.json(pedido);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async deletar(req, res) {
        try {
            const { id } = req.params;
            await this.pedidoService.deletarPedido(Number(id));
            return res.status(204).send();
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.PedidoController = PedidoController;
//# sourceMappingURL=PedidoController.js.map