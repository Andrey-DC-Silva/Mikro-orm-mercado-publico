import { Collection } from '@mikro-orm/core';
import { Usuario } from './Usuario.js';
import { ItemPedido } from './ItemPedido.js';
export declare class Pedido {
    id: number;
    usuario: Usuario;
    total: number;
    itens: Collection<ItemPedido, object>;
}
//# sourceMappingURL=Pedido.d.ts.map