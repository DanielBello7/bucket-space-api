"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.LOGGER = exports.ACTIVE = exports.NODE_ENV = exports.CONSTANTS = exports.EXT = exports.ENV = void 0;
var env_config_1 = require("./env/env.config");
Object.defineProperty(exports, "NODE_ENV", { enumerable: true, get: function () { return env_config_1.NODE_ENV; } });
Object.defineProperty(exports, "ENV", { enumerable: true, get: function () { return env_config_1.ENV; } });
Object.defineProperty(exports, "EXT", { enumerable: true, get: function () { return env_config_1.EXT; } });
var winston_logger_1 = require("./logger/winston.logger");
Object.defineProperty(exports, "LOGGER", { enumerable: true, get: function () { return winston_logger_1.logger; } });
var multer_config_1 = require("./uploads/multer.config");
Object.defineProperty(exports, "upload", { enumerable: true, get: function () { return multer_config_1.upload; } });
var constant_1 = require("./constants/constant");
Object.defineProperty(exports, "CONSTANTS", { enumerable: true, get: function () { return constant_1.CONSTANTS; } });
var ACTIVE = constant_1.CONSTANTS;
exports.ACTIVE = ACTIVE;
//# sourceMappingURL=index.js.map