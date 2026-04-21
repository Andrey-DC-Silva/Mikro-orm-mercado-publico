const API_URL = 'http://localhost:3000/api';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
};

export type CreateUsuarioDTO = {
  nome: string;
  email: string;
};

export async function getUsuarios(): Promise<Usuario[]> {
  const res = await fetch(`${API_URL}/usuarios`);
  return res.json();
}

export async function createUsuario(data: CreateUsuarioDTO): Promise<Usuario> {
  const res = await fetch(`${API_URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Falha ao criar usuário');
  }

  return res.json();
}