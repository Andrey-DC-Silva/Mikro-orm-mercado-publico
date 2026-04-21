import "./Geral.css";

import { useEffect, useState, useCallback } from "react";
import { getUsuarios, createUsuario } from "../services/Usuarioapi";
import type { Usuario } from "../services/Usuarioapi";

import { FaUser, FaEnvelope, FaPlus, FaUsers } from "react-icons/fa";

export default function UsuariosList() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const loadUsuarios = useCallback(async () => {
    const data = await getUsuarios();
    setUsuarios(data);
  }, []);

  useEffect(() => {
    const load = async () => {
      const data = await getUsuarios();
      setUsuarios(data);
    };

    load();
  }, []);

  async function handleCreate() {
    try {
      setLoading(true);

      await createUsuario({ nome, email });

      setNome("");
      setEmail("");

      await loadUsuarios();
    } catch (err) {
      console.log(err instanceof Error ? err.message : err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>
          <FaUsers style={{ marginRight: 8 }} />
          Usuários
        </h1>
      </header>

      <div className="layout">
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

            <button onClick={handleCreate} disabled={loading}>
              <FaPlus style={{ marginRight: 6 }} />
              {loading ? "Criando..." : "Criar usuário"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}