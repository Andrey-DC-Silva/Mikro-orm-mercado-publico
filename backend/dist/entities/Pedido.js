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
exports.Pedido = void 0;
const core_1 = require("@mikro-orm/core");
const Usuario_js_1 = require("./Usuario.js");
const ItemPedido_js_1 = require("./ItemPedido.js");
let Pedido = class Pedido {
    id;
    usuario;
    total;
    itens = new core_1.Collection(this);
};
exports.Pedido = Pedido;
__decorate([
    (0, core_1.PrimaryKey)({ type: 'number' }),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => Usuario_js_1.Usuario),
    __metadata("design:type", Usuario_js_1.Usuario)
], Pedido.prototype, "usuario", void 0);
__decorate([
    (0, core_1.Property)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Pedido.prototype, "total", void 0);
__decorate([
    (0, core_1.OneToMany)(() => ItemPedido_js_1.ItemPedido, item => item.pedido),
    __metadata("design:type", Object)
], Pedido.prototype, "itens", void 0);
exports.Pedido = Pedido = __decorate([
    (0, core_1.Entity)({ tableName: "pedidos" })
], Pedido);
//# sourceMappingURL=Pedido.js.map