import './Geral.css';
import { useEffect, useState } from 'react';

import { getPedidos, createPedido } from '../services/Pedidoapi';
import type { Pedido } from '../services/Pedidoapi';

import { getProdutos } from '../services/Produtoapi';
import type { Produto } from '../services/Produtoapi';

import {
    FaShoppingCart,
    FaPlus,
    FaTrash,
    FaUser,
    FaBoxOpen,
    FaMoneyBillWave,
} from 'react-icons/fa';

type CarrinhoItem = {
    produtoId: number;
    nome: string;
    quantidade: number;
};

export default function PedidosList() {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const [usuarioId, setUsuarioId] = useState('');
    const [produtoId, setProdutoId] = useState('');
    const [quantidade, setQuantidade] = useState('1');

    const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const pedidosData = await getPedidos();
            setPedidos(pedidosData);

            const produtosData = await getProdutos();
            setProdutos(produtosData);
        })();
    }, []);

    async function reloadPedidos() {
        const data = await getPedidos();
        setPedidos(data);
    }

    function adicionarAoCarrinho() {
        if (!produtoId) return;

        const produto = produtos.find(p => p.id === Number(produtoId));
        if (!produto) return;

        setCarrinho((prev) => [
            ...prev,
            {
                produtoId: produto.id,
                nome: produto.nome,
                quantidade: Number(quantidade),
            },
        ]);
    }

    function removerDoCarrinho(produtoId: number) {
        setCarrinho((prev) =>
            prev.filter((item) => item.produtoId !== produtoId)
        );
    }

    async function handleCreate() {
        setLoading(true);

        try {
            await createPedido({
                usuarioId: Number(usuarioId),
                itens: carrinho.map((item) => ({
                    produtoId: item.produtoId,
                    quantidade: item.quantidade,
                })),
            });

            setUsuarioId('');
            setCarrinho([]);
            setProdutoId('');
            setQuantidade('1');

            await reloadPedidos();
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <header className="header">
                <h1>
                    <FaShoppingCart style={{ marginRight: 8 }} />
                    Pedidos
                </h1>
            </header>

            <div className="layout">
                <section className="card">
                    <h2>
                        <FaBoxOpen style={{ marginRight: 6 }} />
                        Lista de pedidos
                    </h2>

                    <ul className="list">
                        {pedidos.map((p) => (
                            <li key={p.id} className="item">
                                <span>
                                    <FaUser style={{ marginRight: 6 }} />
                                    {p.usuario?.id} / {p.usuario?.nome}
                                </span>

                                <span>
                                    <FaMoneyBillWave style={{ marginRight: 6 }} />
                                    R$ {p.total}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="card">
                    <h2>Novo pedido</h2>

                    <div className="form">
                        <div className="input-wrapper">
                            <FaUser className="icon" />
                            <input
                                placeholder="Usuário ID"
                                value={usuarioId}
                                onChange={(e) => setUsuarioId(e.target.value)}
                            />
                        </div>

                        <select
                            value={produtoId}
                            onChange={(e) => setProdutoId(e.target.value)}
                        >
                            <option value="">Selecione um produto</option>

                            {produtos.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.nome} - R$ {p.preco}
                                </option>
                            ))}
                        </select>

                        <input
                            type="number"
                            placeholder="Quantidade"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />

                        <button type="button" onClick={adicionarAoCarrinho}>
                            <FaPlus style={{ marginRight: 6 }} />
                            Adicionar ao carrinho
                        </button>

                        <button onClick={handleCreate} disabled={loading}>
                            <FaShoppingCart style={{ marginRight: 6 }} />
                            {loading ? 'Criando...' : 'Criar pedido'}
                        </button>
                    </div>

                    <h3>Carrinho</h3>

                    <ul className="list">
                        {carrinho.map((item) => (
                            <li key={item.produtoId} className="item">
                                <span>{item.nome}</span>
                                <span>Qtd: {item.quantidade}</span>

                                <button onClick={() => removerDoCarrinho(item.produtoId)}>
                                    <FaTrash style={{ marginRight: 6 }} />
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}