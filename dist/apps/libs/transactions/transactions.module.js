"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsModule = void 0;
var transactions_service_1 = require("./transactions.service");
var TransactionsModule = /** @class */ (function () {
    function TransactionsModule(datasource) {
        this.datasource = datasource;
        var transaction = this.datasource.createQueryRunner();
        this.service = new transactions_service_1.TransactionsService(transaction);
    }
    return TransactionsModule;
}());
exports.TransactionsModule = TransactionsModule;
//# sourceMappingURL=transactions.module.js.map