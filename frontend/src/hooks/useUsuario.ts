import { useCallback, useEffect, useState } from "react";
import { getUsuarios, createUsuario } from "../services/Usuarioapi";
import type { Usuario } from "../types";

export function useUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(false);

    const loadUsuarios = useCallback(async () => {
        const data = await getUsuarios();
        setUsuarios(data);
    }, []);

    useEffect(() => {
        async function load() {
            const data = await getUsuarios();
            setUsuarios(data);
        }

        load();
    }, []);

    async function criarUsuario(nome: string, email: string) {
        try {
            setLoading(true);

            await createUsuario({ nome, email });

            await loadUsuarios();
        } finally {
            setLoading(false);
        }
    }

    return {
        usuarios,
        loading,
        criarUsuario,
    };
}