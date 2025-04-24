"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var parse_body_pipe_pipes_1 = require("../../middlewares/pipes/parse-body-pipe.pipes");
var uuid_params_pipe_1 = require("./pipes/uuid-params.pipe");
var create_account_dto_1 = require("./dto/create-account.dto");
var accounts_module_1 = require("./accounts.module");
var datasource_1 = require("../../datasource");
var update_account_dto_1 = require("./dto/update-account.dto");
var session_guard_1 = require("../../middlewares/session-guard");
var router = express_1.default.Router();
var module = new accounts_module_1.AccountModule(datasource_1.database);
router.post("/sign_up/", (0, parse_body_pipe_pipes_1.parseBodyPipe)(create_account_dto_1.CreateAccountDto), module.controller.create);
router.patch("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), (0, parse_body_pipe_pipes_1.parseBodyPipe)(update_account_dto_1.UpdateAccountDto), module.controller.update);
router.get("/", session_guard_1.session_guard, module.controller.get);
router.get("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.find);
router.delete("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.remove);
exports.default = router;
//# sourceMappingURL=accounts.route.js.map