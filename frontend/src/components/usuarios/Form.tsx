import { useState } from "react";
import { FaUser, FaEnvelope, FaPlus } from "react-icons/fa";

type Props = {
    onSubmit: (nome: string, email: string) => void;
    loading: boolean;
};

export default function UsuarioForm({ onSubmit, loading }: Props) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit() {
        onSubmit(nome, email);
        setNome("");
        setEmail("");
    }

    return (
        <section className="card">
            <h2>Novo usuário</h2>

            <div className="form">
                <div className="input-wrapper">
                    <FaUser className="icon" />
                    <input
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="input-wrapper">
                    <FaEnvelope className="icon" />
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button onClick={handleSubmit} disabled={loading}>
                    <FaPlus style={{ marginRight: 6 }} />
                    {loading ? "Criando..." : "Criar usuário"}
                </button>
            </div>
        </section>
    );
}