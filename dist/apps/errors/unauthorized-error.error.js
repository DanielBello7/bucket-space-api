"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
var http_status_1 = __importDefault(require("http-status"));
var app_error_error_1 = require("./app-error.error");
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(msg, ctx) {
        if (msg === void 0) { msg = "An unauthorized request has been made"; }
        if (ctx === void 0) { ctx = "error context"; }
        var _this = _super.call(this, msg, ctx) || this;
        _this.statusCode = http_status_1.default.UNAUTHORIZED;
        _this.title = "UnauthorizedError";
        Object.setPrototypeOf(_this, UnauthorizedError.prototype);
        return _this;
    }
    return UnauthorizedError;
}(app_error_error_1.AppError));
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=unauthorized-error.error.js.map