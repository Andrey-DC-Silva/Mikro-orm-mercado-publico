import { EntityRepository } from '@mikro-orm/postgresql';
import { Usuario } from '../entities/Usuario.js';

export class UsuarioRepository extends EntityRepository<Usuario> {}