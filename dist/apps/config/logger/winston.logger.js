"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var winston_1 = __importDefault(require("winston"));
var path_1 = __importDefault(require("path"));
var colorizer = winston_1.default.format.colorize();
exports.logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.default.format.printf(function (_a) {
        var level = _a.level, message = _a.message, timestamp = _a.timestamp;
        var upperCaseLevel = level.toUpperCase();
        var coloredLevel = colorizer.colorize(level, upperCaseLevel);
        return "[".concat(coloredLevel, "] ").concat(timestamp, " ").concat(message, " ");
    })),
    level: 'info',
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            format: winston_1.default.format.json(),
            level: 'info',
            dirname: path_1.default.resolve(__dirname, path_1.default.join('..', '..', '..', 'logs')),
            maxsize: 10240 * 10240,
        }),
    ],
});
//# sourceMappingURL=winston.logger.js.map