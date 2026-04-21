import { Request, Response } from 'express';
import { ProdutoService } from '../services/ProdutoService.js';

export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  criar = async (req: Request, res: Response) => {
    try {
      const { nome, preco, estoque } = req.body;

      const produto = await this.produtoService.criarProduto({
        nome,
        preco,
        estoque,
      });

      return res.status(201).json(produto);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  listar = async (req: Request, res: Response) => {
    try {
      const produtos = await this.produtoService.listarProdutos();
      return res.json(produtos);
    } catch (err) {
      console.error("ERRO LISTAR PRODUTOS:", err);
      return res.status(500).json({ message: "erro interno" });
    }
  };

  buscar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const produto = await this.produtoService.buscarProduto(Number(id));

      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }

      return res.json(produto);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  atualizar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { nome, preco, estoque } = req.body;

      const produto = await this.produtoService.atualizarProduto(Number(id), {
        nome,
        preco,
        estoque,
      });

      return res.json(produto);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  deletar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await this.produtoService.deletarProduto(Number(id));

      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };
}