"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshModule = void 0;
var refresh_service_1 = require("./refresh.service");
var refresh_entity_1 = require("./entities/refresh.entity");
var RefreshModule = /** @class */ (function () {
    function RefreshModule(database) {
        this.datasource = database;
        this.repo = this.datasource.getRepository(refresh_entity_1.Refresh);
        this.service = new refresh_service_1.RefreshService(this.repo);
    }
    return RefreshModule;
}());
exports.RefreshModule = RefreshModule;
//# sourceMappingURL=refresh.module.js.map