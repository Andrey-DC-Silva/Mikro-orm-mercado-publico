import { Request, Response } from 'express';
import { PedidoService } from '../services/PedidoService.js';
export declare class PedidoController {
    private pedidoService;
    constructor(pedidoService: PedidoService);
    criar(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    listar(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    buscarPorId(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    atualizar(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deletar(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=PedidoController.d.ts.map