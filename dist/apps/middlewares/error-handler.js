"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var winston_logger_1 = require("../config/logger/winston.logger");
var app_error_error_1 = require("../errors/app-error.error");
var validation_error_error_1 = require("../errors/validation-error.error");
var errorHandler = function (error, req, res, nxt) {
    var statusCode;
    var msg;
    var title;
    var errors = [];
    if (error instanceof validation_error_error_1.ValidationError) {
        msg = error.msg;
        statusCode = error.statusCode;
        title = error.title;
        errors = error.errors.flatMap(function (error) { var _a; return Object.values((_a = error.constraints) !== null && _a !== void 0 ? _a : {}); });
    }
    else if (error instanceof app_error_error_1.AppError) {
        msg = error.msg;
        statusCode = error.statusCode;
        title = error.title;
    }
    else {
        title = 'Internal Server Error';
        msg = 'Error Occured';
        statusCode = 500;
    }
    winston_logger_1.logger.error("".concat(title, ", ").concat(msg));
    res.status(statusCode).json({ title: title, msg: msg, status: statusCode, errors: errors });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map