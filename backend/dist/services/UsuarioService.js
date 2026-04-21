"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
class UsuarioService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async criar(data) {
        if (!data.nome || !data.email) {
            throw new Error('Nome e email são obrigatórios');
        }
        const exists = await this.repo.findOne({ email: data.email });
        if (exists) {
            throw new Error('Email já cadastrado');
        }
        const user = this.repo.create(data);
        await this.repo.getEntityManager().persistAndFlush(user);
        return user;
    }
    async acharTodos() {
        return this.repo.findAll();
    }
    async acharPorId(id) {
        return this.repo.findOneOrFail(id);
    }
    async atualizar(id, data) {
        const user = await this.repo.findOneOrFail(id);
        this.repo.assign(user, data);
        await this.repo.getEntityManager().persistAndFlush(user);
        return user;
    }
    async deletar(id) {
        const user = await this.repo.findOneOrFail(id);
        await this.repo.getEntityManager().removeAndFlush(user);
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=UsuarioService.js.map