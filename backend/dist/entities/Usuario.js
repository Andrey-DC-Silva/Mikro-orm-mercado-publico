"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const core_1 = require("@mikro-orm/core");
const UsuarioRepository_js_1 = require("../repositories/UsuarioRepository.js");
const Pedido_js_1 = require("./Pedido.js");
let Usuario = class Usuario {
    id;
    nome;
    email;
    pedidos = new core_1.Collection(this);
};
exports.Usuario = Usuario;
__decorate([
    (0, core_1.PrimaryKey)({ type: 'number' }),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ type: 'string' }),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    (0, core_1.Property)({ type: 'string' }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, core_1.OneToMany)(() => Pedido_js_1.Pedido, pedido => pedido.usuario),
    __metadata("design:type", Object)
], Usuario.prototype, "pedidos", void 0);
exports.Usuario = Usuario = __decorate([
    (0, core_1.Entity)({ tableName: 'usuarios', repository: () => UsuarioRepository_js_1.UsuarioRepository })
], Usuario);
//# sourceMappingURL=Usuario.js.map