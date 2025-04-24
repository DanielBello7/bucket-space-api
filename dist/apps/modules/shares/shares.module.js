"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharesModule = void 0;
var share_entity_1 = require("./entities/share.entity");
var shares_service_1 = require("./shares.service");
var shares_controller_1 = require("./shares.controller");
var SharesModule = /** @class */ (function () {
    function SharesModule(datastore) {
        this.repo = datastore.getRepository(share_entity_1.Share);
        this.service = new shares_service_1.ShareService(this.repo);
        this.controller = new shares_controller_1.SharesController(this.service);
    }
    return SharesModule;
}());
exports.SharesModule = SharesModule;
//# sourceMappingURL=shares.module.js.map