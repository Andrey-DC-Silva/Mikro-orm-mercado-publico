import { UsuarioRepository } from '../repositories/UsuarioRepository.js';

export class UsuarioService {
  constructor(private repo: UsuarioRepository) {}

  async criar(data: { nome: string; email: string }) {
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

  async acharPorId(id: number) {
    return this.repo.findOneOrFail(id);
  }

  async atualizar(id: number, data: Partial<{ nome: string; email: string }>) {
    const user = await this.repo.findOneOrFail(id);

    this.repo.assign(user, data);

    await this.repo.getEntityManager().persistAndFlush(user);

    return user;
  }

  async deletar(id: number) {
    const user = await this.repo.findOneOrFail(id);

    await this.repo.getEntityManager().removeAndFlush(user);
  }
}