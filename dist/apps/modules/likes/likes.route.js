"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var likes_module_1 = require("./likes.module");
var datasource_1 = require("../../datasource");
var uuid_params_pipe_1 = require("../accounts/pipes/uuid-params.pipe");
var create_like_dto_1 = require("./dto/create-like.dto");
var parse_body_pipe_pipes_1 = require("../../middlewares/pipes/parse-body-pipe.pipes");
var session_guard_1 = require("../../middlewares/session-guard");
var router = express_1.default.Router();
var module = new likes_module_1.LikesModule(datasource_1.database);
router.get("/post/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.getPostLikes);
router.get("/post/:id/count/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.getPostLikesCount);
router.post("/", session_guard_1.session_guard, (0, parse_body_pipe_pipes_1.parseBodyPipe)(create_like_dto_1.CreateLikeDto), module.controller.likePost);
router.get("/account/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.getAccLikes);
router.delete("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.dislikePost);
exports.default = router;
//# sourceMappingURL=likes.route.js.map