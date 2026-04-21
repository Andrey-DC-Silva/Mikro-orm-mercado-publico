import { FaUser, FaMoneyBillWave } from 'react-icons/fa';
import type { Pedido } from '../../types';

type Props = {
    pedidos: Pedido[];
};

export default function Pedidos({ pedidos }: Props) {
    return (
        <ul className="list">
            {pedidos.map((p) => (
                <li key={p.id} className="item">
                    <span>
                        <FaUser /> {p.usuario?.nome}
                    </span>

                    <span>
                        <FaMoneyBillWave /> R$ {p.total}
                    </span>
                </li>
            ))}
        </ul>
    );
}