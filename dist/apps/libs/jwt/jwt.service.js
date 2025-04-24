"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JwtService = /** @class */ (function () {
    function JwtService(secret, exprAt) {
        this.secret = secret;
        this.exprAt = exprAt;
    }
    JwtService.prototype.sign = function (payload, options) {
        if (options === void 0) { options = {
            expiresIn: this.exprAt,
        }; }
        return jsonwebtoken_1.default.sign(payload, this.secret, options);
    };
    JwtService.prototype.decode = function (token, options) {
        return jsonwebtoken_1.default.decode(token, options);
    };
    JwtService.prototype.verify = function (token, options) {
        return jsonwebtoken_1.default.verify(token, this.secret, options);
    };
    return JwtService;
}());
exports.JwtService = JwtService;
//# sourceMappingURL=jwt.service.js.map