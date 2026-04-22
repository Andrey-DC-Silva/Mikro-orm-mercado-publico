export type Produto = {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
};

export type Usuario = {
    id: number;
    nome: string;
    email: string,
};

export type CreateUsuarioDTO = {
  nome: string;
  email: string;
};

export type Pedido = {
    id: number;
    usuario: Usuario;
    total: number;
    itens: [];
};

export type CreatePedidoDTO = {
    usuarioId: number;
    itens: { produtoId: number; quantidade: number }[];
};

export type CarrinhoItem = {
    produtoId: number;
    nome: string;
    quantidade: number;
};