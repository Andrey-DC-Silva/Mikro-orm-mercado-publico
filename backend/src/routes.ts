import { Router } from 'express';
import { UsuarioController } from './controllers/UsuarioController.js';
import { PedidoController } from './controllers/PedidoController.js';
import { ProdutoController } from './controllers/ProdutoController.js';

export function createRoutes(
  usuarioController: UsuarioController,
  pedidoController: PedidoController,
  produtoController: ProdutoController
) {
  const router = Router();

  router.get('/usuarios', (req, res) =>
    usuarioController.acharTodos(req, res)
  );

  router.post('/usuarios', (req, res) =>
    usuarioController.criar(req, res)
  );

  router.get('/pedidos', (req, res) =>
    pedidoController.listar(req, res)
  );

  router.post('/pedidos', (req, res) =>
    pedidoController.criar(req, res)
  );

  router.get('/produtos', produtoController.listar);
  router.post('/produtos', produtoController.criar);
  router.get('/produtos/:id', produtoController.buscar);
  router.put('/produtos/:id', produtoController.atualizar);
  router.delete('/produtos/:id', produtoController.deletar);

  return router;
}