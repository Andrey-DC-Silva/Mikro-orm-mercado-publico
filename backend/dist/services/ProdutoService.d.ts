export declare class ProdutoService {
    private em;
    constructor(em: any);
    listarProdutos(): Promise<any>;
    buscarProduto(id: number): Promise<any>;
    criarProduto(data: any): Promise<any>;
    atualizarProduto(id: number, data: any): Promise<any>;
    deletarProduto(id: number): Promise<void>;
}
//# sourceMappingURL=ProdutoService.d.ts.map