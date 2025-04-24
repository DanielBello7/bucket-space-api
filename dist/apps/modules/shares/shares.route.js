"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var shares_module_1 = require("./shares.module");
var datasource_1 = require("../../datasource");
var uuid_params_pipe_1 = require("../accounts/pipes/uuid-params.pipe");
var create_share_dto_1 = require("./dto/create-share.dto");
var parse_body_pipe_pipes_1 = require("../../middlewares/pipes/parse-body-pipe.pipes");
var update_share_dto_1 = require("./dto/update-share.dto");
var session_guard_1 = require("../../middlewares/session-guard");
var router = express_1.default.Router();
var module = new shares_module_1.SharesModule(datasource_1.database);
router.get("/user/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.getUserShares);
router.get("/", session_guard_1.session_guard, module.controller.getShares);
router.delete("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.unSharePost);
router.get("/count/user/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.countUserShares);
router.post("/", session_guard_1.session_guard, (0, parse_body_pipe_pipes_1.parseBodyPipe)(create_share_dto_1.CreateShareDto), module.controller.sharePost);
router.get("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.findShared);
router.patch("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), (0, parse_body_pipe_pipes_1.parseBodyPipe)(update_share_dto_1.UpdateShareDto), module.controller.updateSharedPost);
exports.default = router;
//# sourceMappingURL=shares.route.js.map