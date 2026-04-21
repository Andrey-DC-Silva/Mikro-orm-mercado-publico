import type { Request, Response } from 'express';
import { UsuarioService } from '../services/UsuarioService.js';

export class UsuarioController {
  constructor(private service: UsuarioService) {}

  criar = async (req: Request, res: Response) => {
    try {
      const user = await this.service.criar(req.body);
      return res.status(201).json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };

  acharTodos = async (_req: Request, res: Response) => {
    const users = await this.service.acharTodos();
    return res.json(users);
  };

  acharPorId = async (req: Request, res: Response) => {
    try {
      const user = await this.service.acharPorId(Number(req.params.id));
      return res.json(user);
    } catch (err: any) {
      return res.status(404).json({ error: err.message });
    }
  };

  atualizar = async (req: Request, res: Response) => {
    try {
      const user = await this.service.atualizar(Number(req.params.id), req.body);
      return res.json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };

  deletar = async (req: Request, res: Response) => {
    try {
      await this.service.deletar(Number(req.params.id));
      return res.status(204).send();
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };
}