"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_js_1 = __importDefault(require("./mikro-orm.config.js"));
const Usuario_js_1 = require("./entities/Usuario.js");
const UsuarioService_js_1 = require("./services/UsuarioService.js");
const PedidoService_js_1 = require("./services/PedidoService.js");
const UsuarioController_js_1 = require("./controllers/UsuarioController.js");
const PedidoController_js_1 = require("./controllers/PedidoController.js");
const routes_js_1 = require("./routes.js");
const ProdutoController_js_1 = require("./controllers/ProdutoController.js");
const ProdutoService_js_1 = require("./services/ProdutoService.js");
async function main() {
    const orm = await core_1.MikroORM.init(mikro_orm_config_js_1.default);
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use((req, res, next) => {
        core_1.RequestContext.create(orm.em, next);
    });
    const usuarioRepo = orm.em.getRepository(Usuario_js_1.Usuario);
    const usuarioService = new UsuarioService_js_1.UsuarioService(usuarioRepo);
    const pedidoService = new PedidoService_js_1.PedidoService(orm.em);
    const produtoService = new ProdutoService_js_1.ProdutoService(orm.em);
    const usuarioController = new UsuarioController_js_1.UsuarioController(usuarioService);
    const pedidoController = new PedidoController_js_1.PedidoController(pedidoService);
    const produtoController = new ProdutoController_js_1.ProdutoController(produtoService);
    app.use('/api', (0, routes_js_1.createRoutes)(usuarioController, pedidoController, produtoController));
    app.listen(3000, () => {
        console.log('API rodando em http://localhost:3000');
    });
}
main();
//# sourceMappingURL=app.js.map