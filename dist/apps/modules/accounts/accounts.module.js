"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
var accounts_controller_1 = require("./accounts.controller");
var account_entity_1 = require("./entities/account.entity");
var accounts_service_1 = require("./accounts.service");
var AccountModule = /** @class */ (function () {
    function AccountModule(datasource) {
        this.repo = datasource.getRepository(account_entity_1.Account);
        this.service = new accounts_service_1.AccountService(this.repo);
        this.controller = new accounts_controller_1.AccountController(this.service);
    }
    return AccountModule;
}());
exports.AccountModule = AccountModule;
//# sourceMappingURL=accounts.module.js.map