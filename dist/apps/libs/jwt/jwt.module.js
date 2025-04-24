"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtModule = void 0;
var jwt_service_1 = require("./jwt.service");
var JwtModule = /** @class */ (function () {
    function JwtModule(secret, duration) {
        this.secret = secret;
        this.duration = duration;
        this.service = new jwt_service_1.JwtService(this.secret, this.duration);
    }
    return JwtModule;
}());
exports.JwtModule = JwtModule;
//# sourceMappingURL=jwt.module.js.map