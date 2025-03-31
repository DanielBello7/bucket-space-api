"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRO_CONSTANT = void 0;
var path_1 = __importDefault(require("path"));
exports.PRO_CONSTANT = {
    DATABASE_URI: path_1.default.resolve(__dirname, '../../../../sqls', "bucket.pro.db"),
    JWT_SECRET: 'secret',
    NODE_ENV: 'production',
    DATABASE: 'bucket.pro.db',
    DATABASE_DIR: path_1.default.resolve(__dirname, '../../../../sqls'),
    PORT: 3000,
    SALT: 20,
    SERVICE: 'BUCKET',
    SESSION_SECRET: 'secret',
    EXPIRES_IN: '24h',
};
//# sourceMappingURL=pro.constant.js.map