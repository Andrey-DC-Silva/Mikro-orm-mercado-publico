import { useState } from 'react';
import { FaPlus, FaSeedling, FaAppleAlt, FaBox } from 'react-icons/fa';
import type { Produto } from '../../types';

type Props = {
    produtos: Produto[];
    onAdd: (produto: Produto, quantidade: number) => void;
};

export default function Produtos({ produtos, onAdd }: Props) {
    const [quantidades, setQuantidades] = useState<Record<number, number>>({});

    function getIcon(nome: string) {
        const n = nome.toLowerCase();

        if (n.includes('arroz') || n.includes('feijão')) return <FaSeedling />;
        if (n.includes('maçã') || n.includes('fruta')) return <FaAppleAlt />;

        return <FaBox />;
    }

    return (
        <div className="produtos-grid">
            {produtos.map((p) => {
                const qtd = quantidades[p.id] || 1;

                return (
                    <div key={p.id} className="produto-card">
                        <div className="produto-header">
                            {getIcon(p.nome)}
                            <span>{p.nome}</span>
                        </div>

                        <span>R$ {p.preco}</span>

                        <input
                            type="number"
                            min="1"
                            value={qtd}
                            onChange={(e) =>
                                setQuantidades({
                                    ...quantidades,
                                    [p.id]: Number(e.target.value),
                                })
                            }
                        />

                        <button onClick={() => onAdd(p, qtd)}>
                            <FaPlus /> Adicionar
                        </button>
                    </div>
                );
            })}
        </div>
    );
}