"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
var otp_module_1 = require("../otp/otp.module");
var auth_controller_1 = require("./auth.controller");
var auth_service_1 = require("./auth.service");
var accounts_module_1 = require("../accounts/accounts.module");
var libs_1 = require("../../libs");
var config_1 = require("../../config");
var brevo_1 = require("../../libs/brevo");
var refresh_1 = require("../refresh");
var AuthModule = /** @class */ (function () {
    function AuthModule(datasource) {
        var otp = new otp_module_1.OtpModule(datasource);
        var refresh = new refresh_1.RefreshModule(datasource);
        var accounts = new accounts_module_1.AccountModule(datasource);
        var jwt = new libs_1.JwtModule(config_1.ACTIVE.JWT_SECRET, "24h");
        var email = new brevo_1.BrevoModule({
            apikey: config_1.ACTIVE.EMAIL_API_KEY,
            email: config_1.ACTIVE.APP_EMAIL,
            email_name: config_1.ACTIVE.APP_EMAIL_NAME,
        });
        this.service = new auth_service_1.AuthService(otp.otpService, accounts.service, jwt.service, email.service, refresh.service);
        this.controller = new auth_controller_1.AuthController(this.service);
        if (AuthModule.instance) {
            return AuthModule.instance;
        }
        else {
            AuthModule.instance = this;
        }
    }
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map