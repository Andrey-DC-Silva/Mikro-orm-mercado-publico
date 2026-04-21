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
exports.ItemPedido = void 0;
const core_1 = require("@mikro-orm/core");
const Pedido_1 = require("./Pedido");
const Produto_1 = require("./Produto");
let ItemPedido = class ItemPedido {
    id;
    pedido;
    produto;
    quantidade;
    precoUnitario;
};
exports.ItemPedido = ItemPedido;
__decorate([
    (0, core_1.PrimaryKey)({ type: 'number' }),
    __metadata("design:type", Number)
], ItemPedido.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => Pedido_1.Pedido),
    __metadata("design:type", Pedido_1.Pedido)
], ItemPedido.prototype, "pedido", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => Produto_1.Produto),
    __metadata("design:type", Produto_1.Produto)
], ItemPedido.prototype, "produto", void 0);
__decorate([
    (0, core_1.Property)({ type: 'number' }),
    __metadata("design:type", Number)
], ItemPedido.prototype, "quantidade", void 0);
__decorate([
    (0, core_1.Property)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], ItemPedido.prototype, "precoUnitario", void 0);
exports.ItemPedido = ItemPedido = __decorate([
    (0, core_1.Entity)({ tableName: 'itemPedidos' })
], ItemPedido);
//# sourceMappingURL=ItemPedido.js.map