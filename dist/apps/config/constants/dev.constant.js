"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEV_CONSTANT = void 0;
var path_1 = __importDefault(require("path"));
exports.DEV_CONSTANT = {
    DATABASE_URI: path_1.default.resolve(__dirname, path_1.default.join('..', '..', '..', 'sqls', "bucket.dev.db")),
    DATABASE: 'bucket.dev.db',
    DATABASE_DIR: path_1.default.resolve(__dirname, '../../../sqls'),
    JWT_SECRET: 'secret',
    NODE_ENV: 'development',
    PORT: 3000,
    SALT: 10,
    SERVICE: 'BUCKET',
    SESSION_SECRET: 'secret',
    EXPIRES_IN: '12h',
};
//# sourceMappingURL=dev.constant.js.map