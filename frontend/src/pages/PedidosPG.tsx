import { useEffect, useState } from 'react';
import { getPedidos, createPedido } from '../services/Pedidoapi';
import { getProdutos } from '../services/Produtoapi';

import { FaBox, FaBoxOpen, FaUser } from 'react-icons/fa';

import Produtos from '../components/pedidos/Produtos';
import Carrinho from '../components/pedidos/Carrinho';
import Pedidos from '../components/pedidos/Pedidos';

import { useCarrinho } from '../hooks/useCarrinho';

import type { Pedido, Produto } from '../types';
import { FaCartShopping } from 'react-icons/fa6';

export default function PedidosPage() {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [usuarioId, setUsuarioId] = useState('');
    const [loading, setLoading] = useState(false);

    const { carrinho, adicionar, remover, limpar } = useCarrinho();

    useEffect(() => {
        (async () => {
            setPedidos(await getPedidos());
            setProdutos(await getProdutos());
        })();
    }, []);

    async function finalizar() {
        setLoading(true);

        try {
            await createPedido({
                usuarioId: Number(usuarioId),
                itens: carrinho.map((i) => ({
                    produtoId: i.produtoId,
                    quantidade: i.quantidade,
                })),
            });

            limpar();
            setUsuarioId('');
            setPedidos(await getPedidos());
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container">

            <header className="header">
                <h1>
                    <FaBox style={{ marginRight: 8 }} />
                    Pedidos
                </h1>
            </header>

            <h3>
                <FaUser style={{ marginRight: 8 }} />
                Usuario
                <input
                    placeholder="Usuário ID"
                    value={usuarioId}
                    onChange={(e) => setUsuarioId(e.target.value)}
                    style={{ marginBottom: 10, marginLeft: 10 }}
                />
            </h3>

            <div className="top-section">
                <Produtos produtos={produtos} onAdd={adicionar} />

                <h1 style={{margin: 20}}>
                    <FaCartShopping style={{ marginRight: 8 }} />
                    Carrinho
                </h1>
                <Carrinho
                    carrinho={carrinho}
                    onRemove={remover}
                    onFinalizar={finalizar}
                    loading={loading}
                />
            </div>

            <h1>
                <FaBoxOpen style={{ marginRight: 8 }} />
                Pedidos Salvos
            </h1>

            <Pedidos pedidos={pedidos} />
        </div>
    );
}