export type Produto = {
    id: number;
    nome: string;
    preco: number;
};

export type Usuario = {
    id: number;
    nome: string;
    email: string,
};

export type Pedido = {
    id: number;
    usuario?: Usuario;
    total: number;
};

export type CarrinhoItem = {
    produtoId: number;
    nome: string;
    quantidade: number;
};