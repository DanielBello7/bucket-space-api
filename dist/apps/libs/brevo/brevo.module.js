"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrevoModule = void 0;
var brevo_service_1 = require("./brevo.service");
var BrevoModule = /** @class */ (function () {
    function BrevoModule(data) {
        this.email_name = data.email_name;
        this.api_key = data.apikey;
        this.email = data.email;
        this.service = new brevo_service_1.BrevoService({
            apikey: this.api_key,
            email: this.email,
            email_name: this.email_name,
        });
    }
    return BrevoModule;
}());
exports.BrevoModule = BrevoModule;
//# sourceMappingURL=brevo.module.js.map