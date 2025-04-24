"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var datasource_1 = require("../../datasource");
var comments_module_1 = require("./comments.module");
var uuid_params_pipe_1 = require("../accounts/pipes/uuid-params.pipe");
var create_comment_dto_1 = require("./dto/create-comment.dto");
var parse_body_pipe_pipes_1 = require("../../middlewares/pipes/parse-body-pipe.pipes");
var session_guard_1 = require("../../middlewares/session-guard");
var router = express_1.default.Router();
var module = new comments_module_1.CommentsModule(datasource_1.database);
router.get("/post/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.getPostComments);
router.get("/post/:id/count/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.getPostCommentsCount);
router.get("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.findComment);
router.delete("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.deleteComment);
router.post("/", session_guard_1.session_guard, (0, parse_body_pipe_pipes_1.parseBodyPipe)(create_comment_dto_1.CreateCommentDto), module.controller.makeComment);
exports.default = router;
//# sourceMappingURL=comments.route.js.map