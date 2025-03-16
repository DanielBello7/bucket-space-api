"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('reflect-metadata');
require('module-alias/register');
require('./config/env/env.config');
var datasource_1 = require("./datasource");
var error_handler_1 = require("./middlewares/error-handler");
var uuid_1 = require("uuid");
var express_slow_down_1 = __importDefault(require("express-slow-down"));
var CONFIG = __importStar(require("./config"));
var express_1 = __importDefault(require("express"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var compression_1 = __importDefault(require("compression"));
var express_session_1 = __importDefault(require("express-session"));
var routes_1 = __importDefault(require("./routes"));
var Store = require('connect-sqlite3')(express_session_1.default);
var app = (0, express_1.default)();
app.use((0, compression_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ['*'],
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
}));
app.use((0, express_slow_down_1.default)({
    windowMs: 15 * 60 * 1000,
    delayAfter: 5,
    delayMs: function (hits) { return hits * 100; },
}));
app.use((0, express_session_1.default)({
    secret: CONFIG.ACTIVE.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 60 * 24 },
    genid: function () { return (0, uuid_1.v4)(); },
    store: new Store({
        db: CONFIG.ACTIVE.DATABASE,
        dir: CONFIG.ACTIVE.DATABASE_DIR,
    }),
}));
app.use(routes_1.default);
app.use(error_handler_1.errorHandler);
datasource_1.database
    .initialize()
    .then(function () {
    app.listen(CONFIG.ACTIVE.PORT, function () {
        CONFIG.LOGGER.info("server running on http://localhost:".concat(CONFIG.ACTIVE.PORT));
    });
})
    .catch(function (error) {
    CONFIG.LOGGER.error(error);
});
//# sourceMappingURL=main.js.map