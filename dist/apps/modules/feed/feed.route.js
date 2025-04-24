"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var feed_module_1 = require("./feed.module");
var datasource_1 = require("../../datasource");
var session_guard_1 = require("../../middlewares/session-guard");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var module = new feed_module_1.FeedModule(datasource_1.database);
router.get("/account/", session_guard_1.session_guard, module.controller.get_user_feed);
router.get("/guest/", module.controller.get_feed);
exports.default = router;
//# sourceMappingURL=feed.route.js.map