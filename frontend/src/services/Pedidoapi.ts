import type { Pedido, CreatePedidoDTO } from "../types";

const API_URL = 'http://localhost:3000/api';

export async function getPedidos(): Promise<Pedido[]> {
    const res = await fetch(`${API_URL}/pedidos`);
    return res.json();
}

export async function createPedido(data: CreatePedidoDTO): Promise<Pedido> {
    const res = await fetch(`${API_URL}/pedidos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Falha ao criar pedido');
    }

    return res.json();
}