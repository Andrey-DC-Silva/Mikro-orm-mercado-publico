import { useState } from 'react';
import type { CarrinhoItem, Produto } from '../types';

type UseCarrinhoReturn = {
    carrinho: CarrinhoItem[];
    adicionar: (produto: Produto, quantidade: number) => void;
    remover: (produtoId: number) => void;
    limpar: () => void;
};

export function useCarrinho(): UseCarrinhoReturn {
    const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);

    function adicionar(produto: Produto, quantidade: number) {
        if (quantidade <= 0) return;

        setCarrinho((prev) => {
            const existente = prev.find(
                (p) => p.produtoId === produto.id
            );

            if (existente) {
                return prev.map((item) =>
                    item.produtoId === produto.id
                        ? {
                              ...item,
                              quantidade: item.quantidade + quantidade,
                          }
                        : item
                );
            }

            return [
                ...prev,
                {
                    produtoId: produto.id,
                    nome: produto.nome,
                    quantidade,
                },
            ];
        });
    }

    function remover(produtoId: number) {
        setCarrinho((prev) =>
            prev.filter((item) => item.produtoId !== produtoId)
        );
    }

    function limpar() {
        setCarrinho([]);
    }

    return {
        carrinho,
        adicionar,
        remover,
        limpar,
    };
}