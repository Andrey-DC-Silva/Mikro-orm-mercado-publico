import { Request, Response } from 'express';
import { PedidoService } from '../services/PedidoService.js';

export class PedidoController {
  constructor(private pedidoService: PedidoService) {}

  async criar(req: Request, res: Response) {
    try {
      const { usuarioId, itens } = req.body;

      const pedido = await this.pedidoService.criarPedido(usuarioId, itens);

      return res.status(201).json(pedido);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const pedidos = await this.pedidoService.listarPedidos();
      return res.json(pedidos);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async buscarPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const pedido = await this.pedidoService.buscarPedido(Number(id));

      if (!pedido) {
        return res.status(404).json({ message: 'Pedido não encontrado' });
      }

      return res.json(pedido);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;

      const pedido = await this.pedidoService.atualizarPedido(Number(id), data);

      return res.json(pedido);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async deletar(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await this.pedidoService.deletarPedido(Number(id));

      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}