import { FaUsers } from "react-icons/fa";

import UsuariosList from "../components/usuarios/List";
import UsuarioForm from "../components/usuarios/Form";

import { useUsuarios } from "../hooks/useUsuario";

export default function UsuariosPage() {
    const { usuarios, loading, criarUsuario } = useUsuarios();

    return (
        <div className="container">
            <header className="header">
                <h1>
                    <FaUsers style={{ marginRight: 8 }} />
                    Usuários
                </h1>
            </header>

            <div className="layout">
                <UsuariosList usuarios={usuarios} />

                <UsuarioForm
                    onSubmit={criarUsuario}
                    loading={loading}
                />
            </div>
        </div>
    );
}