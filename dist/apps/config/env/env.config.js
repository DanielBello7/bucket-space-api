"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.envLocation = exports.ENV = exports.EXT = exports.NODE_ENV = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
exports.NODE_ENV = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'production';
exports.EXT = exports.NODE_ENV == 'development' ? 'DEV' : 'PRO';
exports.ENV = exports.NODE_ENV == 'development' ? 'dev' : 'pro';
exports.envLocation = path_1.default.resolve(__dirname, path_1.default.join('..', '..', '..', 'envs', ".env.".concat(exports.ENV)));
exports.default = (function () {
    dotenv_1.default.config({
        path: exports.envLocation,
    });
});
//# sourceMappingURL=env.config.js.map