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
exports.AppError = void 0;
var http_status_1 = __importDefault(require("http-status"));
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(msg, ctx) {
        if (msg === void 0) { msg = 'An error occured'; }
        if (ctx === void 0) { ctx = 'error context'; }
        var _this = _super.call(this, msg) || this;
        _this.statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
        _this.msg = msg;
        _this.context = ctx;
        _this.title = 'HttpError';
        Object.setPrototypeOf(_this, AppError.prototype);
        return _this;
    }
    return AppError;
}(Error));
exports.AppError = AppError;
//# sourceMappingURL=app-error.error.js.map