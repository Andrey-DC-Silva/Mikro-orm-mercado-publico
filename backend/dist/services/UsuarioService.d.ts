import { UsuarioRepository } from '../repositories/UsuarioRepository.js';
export declare class UsuarioService {
    private repo;
    constructor(repo: UsuarioRepository);
    criar(data: {
        nome: string;
        email: string;
    }): Promise<import("../entities/Usuario.js").Usuario>;
    acharTodos(): Promise<import("@mikro-orm/core").Loaded<import("../entities/Usuario.js").Usuario, never, "*", never>[]>;
    acharPorId(id: number): Promise<import("@mikro-orm/core").Loaded<import("../entities/Usuario.js").Usuario, never, "*", never>>;
    atualizar(id: number, data: Partial<{
        nome: string;
        email: string;
    }>): Promise<import("@mikro-orm/core").Loaded<import("../entities/Usuario.js").Usuario, never, "*", never>>;
    deletar(id: number): Promise<void>;
}
//# sourceMappingURL=UsuarioService.d.ts.map