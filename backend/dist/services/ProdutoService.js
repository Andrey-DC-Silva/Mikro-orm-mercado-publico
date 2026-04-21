"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const Produto_js_1 = require("../entities/Produto.js");
class ProdutoService {
    em;
    constructor(em) {
        this.em = em;
    }
    async listarProdutos() {
        return this.em.find(Produto_js_1.Produto, {});
    }
    async buscarProduto(id) {
        return this.em.findOneOrFail(Produto_js_1.Produto, { id });
    }
    async criarProduto(data) {
        const produto = this.em.create(Produto_js_1.Produto, data);
        await this.em.persistAndFlush(produto);
        return produto;
    }
    async atualizarProduto(id, data) {
        const produto = await this.em.findOneOrFail(Produto_js_1.Produto, { id });
        this.em.assign(produto, data);
        await this.em.persistAndFlush(produto);
        return produto;
    }
    async deletarProduto(id) {
        const produto = await this.em.findOneOrFail(Produto_js_1.Produto, { id });
        await this.em.removeAndFlush(produto);
    }
}
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=ProdutoService.js.map