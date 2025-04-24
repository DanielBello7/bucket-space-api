"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpModule = void 0;
var otp_service_1 = require("./otp.service");
var otp_entity_1 = require("./entities/otp.entity");
var OtpModule = /** @class */ (function () {
    function OtpModule(datasource) {
        this.repo = datasource.getRepository(otp_entity_1.Otp);
        this.otpService = new otp_service_1.OtpService(this.repo);
    }
    return OtpModule;
}());
exports.OtpModule = OtpModule;
//# sourceMappingURL=otp.module.js.map