import { FaUser, FaEnvelope } from "react-icons/fa";
import type { Usuario } from "../../types";

type Props = {
    usuarios: Usuario[];
};

export default function UsuariosList({ usuarios }: Props) {
    return (
        <section className="card">
            <h2>Lista de usuários</h2>

            <ul className="list">
                {usuarios.map((u) => (
                    <li key={u.id} className="item">
                        <span>
                            <FaUser style={{ marginRight: 6 }} />
                            {u.nome}
                        </span>

                        <span>
                            <FaEnvelope style={{ marginRight: 6 }} />
                            {u.email}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}