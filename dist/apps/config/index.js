"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGGER = exports.ACTIVE = exports.CURRENT = exports.envLocation = exports.PRO_CONSTANT = exports.DEV_CONSTANT = exports.NODE_ENV = exports.EXT = exports.ENV = void 0;
var env_config_1 = require("./env/env.config");
Object.defineProperty(exports, "NODE_ENV", { enumerable: true, get: function () { return env_config_1.NODE_ENV; } });
Object.defineProperty(exports, "ENV", { enumerable: true, get: function () { return env_config_1.ENV; } });
Object.defineProperty(exports, "EXT", { enumerable: true, get: function () { return env_config_1.EXT; } });
Object.defineProperty(exports, "envLocation", { enumerable: true, get: function () { return env_config_1.envLocation; } });
var dev_constant_1 = require("./constants/dev.constant");
Object.defineProperty(exports, "DEV_CONSTANT", { enumerable: true, get: function () { return dev_constant_1.DEV_CONSTANT; } });
var pro_constant_1 = require("./constants/pro.constant");
Object.defineProperty(exports, "PRO_CONSTANT", { enumerable: true, get: function () { return pro_constant_1.PRO_CONSTANT; } });
var winston_logger_1 = require("./logger/winston.logger");
Object.defineProperty(exports, "LOGGER", { enumerable: true, get: function () { return winston_logger_1.logger; } });
var CURRENT = {
    DEV: dev_constant_1.DEV_CONSTANT,
    PRO: pro_constant_1.PRO_CONSTANT,
};
exports.CURRENT = CURRENT;
var ACTIVE = CURRENT[env_config_1.EXT];
exports.ACTIVE = ACTIVE;
console.log(ACTIVE);
//# sourceMappingURL=index.js.map