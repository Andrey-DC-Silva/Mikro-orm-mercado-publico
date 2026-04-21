"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
class UsuarioController {
    service;
    constructor(service) {
        this.service = service;
    }
    criar = async (req, res) => {
        try {
            const user = await this.service.criar(req.body);
            return res.status(201).json(user);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    };
    acharTodos = async (_req, res) => {
        const users = await this.service.acharTodos();
        return res.json(users);
    };
    acharPorId = async (req, res) => {
        try {
            const user = await this.service.acharPorId(Number(req.params.id));
            return res.json(user);
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    };
    atualizar = async (req, res) => {
        try {
            const user = await this.service.atualizar(Number(req.params.id), req.body);
            return res.json(user);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    };
    deletar = async (req, res) => {
        try {
            await this.service.deletar(Number(req.params.id));
            return res.status(204).send();
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    };
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map