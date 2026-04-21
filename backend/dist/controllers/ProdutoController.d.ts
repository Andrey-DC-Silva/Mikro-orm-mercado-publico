import { Request, Response } from 'express';
import { ProdutoService } from '../services/ProdutoService.js';
export declare class ProdutoController {
    private produtoService;
    constructor(produtoService: ProdutoService);
    criar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    listar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    buscar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    atualizar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deletar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=ProdutoController.d.ts.map