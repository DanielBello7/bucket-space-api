"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var accounts_route_1 = __importDefault(require("./modules/accounts/accounts.route"));
var router = express_1.default.Router();
router.use('/accounts/', accounts_route_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map