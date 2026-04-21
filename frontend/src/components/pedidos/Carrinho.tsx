import { FaTrash } from 'react-icons/fa';
import type { CarrinhoItem } from '../../types';

type Props = {
    carrinho: CarrinhoItem[];
    onRemove: (produtoId: number) => void;
    onFinalizar: () => void;
    loading: boolean;
};

export default function Carrinho({
    carrinho,
    onRemove,
    onFinalizar,
    loading,
}: Props) {
    return (
        <div>
            <ul className="list">
                {carrinho.map((item) => (
                    <li key={item.produtoId} className="item">
                        <span>{item.nome}</span>
                        <span>Qtd: {item.quantidade}</span>

                        <button onClick={() => onRemove(item.produtoId)}>
                            <FaTrash /> Remover
                        </button>
                    </li>
                ))}
            </ul>

            <button
                onClick={onFinalizar}
                disabled={loading}
                style={{
                    margin: 20,
                    width: 160, 
                    height: 50,
                }}>
                {loading ? 'Criando...' : 'Finalizar pedido'}
            </button>
        </div>
    );
}