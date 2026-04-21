"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgresql_1 = require("@mikro-orm/postgresql");
const path_1 = __importDefault(require("path"));
exports.default = (0, postgresql_1.defineConfig)({
    dbName: 'exemplo_mikro',
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    //entities: [path.join(__dirname, 'entities/**/*.js')],
    entities: ['dist/entities'],
    entitiesTs: ['src/entities'],
    migrations: {
        path: path_1.default.join(__dirname, 'migrations'),
    },
    debug: true,
});
//# sourceMappingURL=mikro-orm.config.js.map