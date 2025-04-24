"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = exports.EXT = exports.NODE_ENV = void 0;
exports.NODE_ENV = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "production";
exports.EXT = exports.NODE_ENV == "development" ? "DEV" : "PRO";
exports.ENV = exports.NODE_ENV == "development" ? "dev" : "pro";
//# sourceMappingURL=env.config.js.map