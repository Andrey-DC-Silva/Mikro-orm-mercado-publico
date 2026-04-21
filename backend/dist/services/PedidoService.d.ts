import { EntityManager } from '@mikro-orm/core';
import { Pedido } from '../entities/Pedido.js';
export declare class PedidoService {
    private em;
    constructor(em: EntityManager);
    criarPedido(usuarioId: number, itens: {
        produtoId: number;
        quantidade: number;
    }[]): Promise<Pedido>;
    listarPedidos(): Promise<import("@mikro-orm/core").Loaded<Pedido, "usuario" | "itens", import("@mikro-orm/core").PopulatePath.ALL, never>[]>;
    buscarPedido(id: number): Promise<import("@mikro-orm/core").Loaded<Pedido, "usuario" | "itens", "*", never> | null>;
    atualizarPedido(id: number, data: Partial<Pedido>): Promise<import("@mikro-orm/core").Loaded<Pedido, never, "*", never>>;
    deletarPedido(id: number): Promise<void>;
}
//# sourceMappingURL=PedidoService.d.ts.map