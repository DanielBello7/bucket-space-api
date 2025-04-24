"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_module_1 = require("./auth.module");
var datasource_1 = require("../../datasource");
var parse_body_pipe_pipes_1 = require("../../middlewares/pipes/parse-body-pipe.pipes");
var login_email_dto_1 = require("./dto/login-email.dto");
var refresh_dto_1 = require("./dto/refresh.dto");
var session_guard_1 = require("../../middlewares/session-guard");
var router = express_1.default.Router();
var module = new auth_module_1.AuthModule(datasource_1.database);
router.post("/sign_in/", (0, parse_body_pipe_pipes_1.parseBodyPipe)(login_email_dto_1.LoginDto), module.controller.sign_in);
router.get("/sign_out", session_guard_1.session_guard, module.controller.logout);
router.post("/refresh/", session_guard_1.session_guard, (0, parse_body_pipe_pipes_1.parseBodyPipe)(refresh_dto_1.RefreshDto), module.controller.refresh);
router.get("/me", session_guard_1.session_guard, module.controller.me);
exports.default = router;
//# sourceMappingURL=auth.route.js.map