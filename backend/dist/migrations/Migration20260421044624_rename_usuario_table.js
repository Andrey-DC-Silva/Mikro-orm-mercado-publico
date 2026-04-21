"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20260421044624_rename_usuario_table = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20260421044624_rename_usuario_table extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table "user" rename to "usuarios";`);
    }
    async down() {
        this.addSql(`alter table "user" rename to "usuarios";`);
    }
}
exports.Migration20260421044624_rename_usuario_table = Migration20260421044624_rename_usuario_table;
//# sourceMappingURL=Migration20260421044624_rename_usuario_table.js.map