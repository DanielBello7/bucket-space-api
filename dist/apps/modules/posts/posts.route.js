"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var posts_module_1 = require("./posts.module");
var datasource_1 = require("../../datasource");
var uuid_params_pipe_1 = require("../accounts/pipes/uuid-params.pipe");
var parse_body_pipe_pipes_1 = require("../../middlewares/pipes/parse-body-pipe.pipes");
var create_post_dto_1 = require("./dto/create-post.dto");
var config_1 = require("../../config");
var session_guard_1 = require("../../middlewares/session-guard");
var router = express_1.default.Router();
var module = new posts_module_1.PostsModule(datasource_1.database);
router.get("/", session_guard_1.session_guard, module.controller.getPosts);
router.get("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.findPost);
router.post("/", session_guard_1.session_guard, config_1.upload.array("files"), (0, parse_body_pipe_pipes_1.parseBodyPipe)(create_post_dto_1.CreatePostDto), module.controller.savePost);
router.get("/user/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.getUserPosts);
router.get("/user/:id/count/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.countUserPosts);
router.delete("/:id/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.removePost);
exports.default = router;
//# sourceMappingURL=posts.route.js.map