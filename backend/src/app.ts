import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { MikroORM, RequestContext } from '@mikro-orm/core';

import config from './mikro-orm.config.js';

import { Usuario } from './entities/Usuario.js';

import { UsuarioService } from './services/UsuarioService.js';
import { PedidoService } from './services/PedidoService.js';

import { UsuarioController } from './controllers/UsuarioController.js';
import { PedidoController } from './controllers/PedidoController.js';

import { createRoutes } from './routes.js';
import { ProdutoController } from './controllers/ProdutoController.js';
import { ProdutoService } from './services/ProdutoService.js';

async function main() {
  const orm = await MikroORM.init(config);

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use((req, res, next) => {
    RequestContext.create(orm.em, next);
  });

  const usuarioRepo = orm.em.getRepository(Usuario);

  const usuarioService = new UsuarioService(usuarioRepo);
  const pedidoService = new PedidoService(orm.em);
  const produtoService = new ProdutoService(orm.em);

  const usuarioController = new UsuarioController(usuarioService);
  const pedidoController = new PedidoController(pedidoService);
  const produtoController = new ProdutoController(produtoService);

  app.use('/api', createRoutes(usuarioController, pedidoController, produtoController));

  app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
  });

}

main();