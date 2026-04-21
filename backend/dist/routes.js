"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutes = createRoutes;
const express_1 = require("express");
function createRoutes(usuarioController, pedidoController, produtoController) {
    const router = (0, express_1.Router)();
    router.get('/usuarios', (req, res) => usuarioController.acharTodos(req, res));
    router.post('/usuarios', (req, res) => usuarioController.criar(req, res));
    router.get('/pedidos', (req, res) => pedidoController.listar(req, res));
    router.post('/pedidos', (req, res) => pedidoController.criar(req, res));
    router.get('/produtos', produtoController.listar);
    router.post('/produtos', produtoController.criar);
    router.get('/produtos/:id', produtoController.buscar);
    router.put('/produtos/:id', produtoController.atualizar);
    router.delete('/produtos/:id', produtoController.deletar);
    return router;
}
//# sourceMappingURL=routes.js.map