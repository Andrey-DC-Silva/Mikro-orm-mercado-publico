const API_URL = 'http://localhost:3000/api';

export async function getProdutos() {
  const res = await fetch(`${API_URL}/produtos`);

  const data = await res.json();

  if (!res.ok) {
    console.error('Error:', data);
    return [];
  }

  return data;
}