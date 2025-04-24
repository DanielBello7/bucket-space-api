"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSTANTS = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: process.env.ENV_FILE });
exports.CONSTANTS = {
    DATABASE: (_a = process.env.DATABASE) !== null && _a !== void 0 ? _a : "",
    DATABASE_URI: (_b = process.env.DATABASE_URI) !== null && _b !== void 0 ? _b : "",
    DATABASE_DIR: (_c = process.env.DATABASE_DIR) !== null && _c !== void 0 ? _c : "",
    JWT_SECRET: (_d = process.env.JWT_SECRET) !== null && _d !== void 0 ? _d : "",
    NODE_ENV: (_e = process.env.NODE_ENV) !== null && _e !== void 0 ? _e : "",
    PORT: !Number.isNaN(parseInt(process.env.PORT))
        ? parseInt(process.env.PORT)
        : 3000,
    SALT: !Number.isNaN(parseInt(process.env.SALT))
        ? parseInt(process.env.SALT)
        : 10,
    SERVICE: (_f = process.env.SERVICE) !== null && _f !== void 0 ? _f : "",
    SESSION_SECRET: (_g = process.env.SESSION_SECRET) !== null && _g !== void 0 ? _g : "",
    EXPIRES_IN: (_h = process.env.EXPIRES_IN) !== null && _h !== void 0 ? _h : "",
    EMAIL_API_KEY: (_j = process.env.EMAIL_API_KEY) !== null && _j !== void 0 ? _j : "",
    APP_EMAIL: (_k = process.env.APP_EMAIL) !== null && _k !== void 0 ? _k : "",
    APP_EMAIL_NAME: (_l = process.env.APP_EMAIL_NAME) !== null && _l !== void 0 ? _l : "",
    ENV_FILE: (_m = process.env.ENV_FILE) !== null && _m !== void 0 ? _m : "",
    LOG_PATH: (_o = process.env.LOG_PATH) !== null && _o !== void 0 ? _o : "",
    CORS: (_p = process.env.CORS) !== null && _p !== void 0 ? _p : "",
};
//# sourceMappingURL=constant.js.map