"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var relationships_module_1 = require("./relationships.module");
var datasource_1 = require("../../datasource");
var uuid_params_pipe_1 = require("../accounts/pipes/uuid-params.pipe");
var parse_body_pipe_pipes_1 = require("../../middlewares/pipes/parse-body-pipe.pipes");
var create_relationship_dto_1 = require("./dto/create-relationship.dto");
var session_guard_1 = require("../../middlewares/session-guard");
var router = express_1.default.Router();
var module = new relationships_module_1.RelationshipModule(datasource_1.database);
router.get("/user/:id/following/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.getUserFollowing);
router.get("/user/:id/followers/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.getUserFollowers);
router.delete("/unfollow/", session_guard_1.session_guard, module.controller.unfollowAccount);
router.get("/user/:id/following/count/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.numUserFollowing);
router.get("/users/:id/followers/count/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.numUserFollowers);
router.post("/follow/", session_guard_1.session_guard, (0, parse_body_pipe_pipes_1.parseBodyPipe)(create_relationship_dto_1.CreateRelationshipDto), module.controller.followAccount);
router.get("/:id/counterpart/", session_guard_1.session_guard, (0, uuid_params_pipe_1.uuidParamPipe)("id"), module.controller.findCounterPart);
exports.default = router;
//# sourceMappingURL=relationships.route.js.map