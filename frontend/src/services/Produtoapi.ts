const API_URL = 'http://localhost:3000/api';

export type Produto = {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
};

export async function getProdutos() {
  const res = await fetch(`${API_URL}/produtos`);

  const data = await res.json();

  if (!res.ok) {
    console.error('ERRO BACKEND:', data);
    return [];
  }

  return data;
}