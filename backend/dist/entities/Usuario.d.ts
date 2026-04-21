import { Collection } from '@mikro-orm/core';
import { Pedido } from './Pedido.js';
export declare class Usuario {
    id: number;
    nome: string;
    email: string;
    pedidos: Collection<Pedido, object>;
}
//# sourceMappingURL=Usuario.d.ts.map