import type { Request, Response } from 'express';
import { UsuarioService } from '../services/UsuarioService.js';
export declare class UsuarioController {
    private service;
    constructor(service: UsuarioService);
    criar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    acharTodos: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    acharPorId: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    atualizar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deletar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=UsuarioController.d.ts.map