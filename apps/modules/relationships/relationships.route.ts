import express from "express";
import { RelationshipModule } from "./relationships.module";
import { database } from "@/datasource";
import { uuidParamPipe } from "../accounts/pipes/uuid-params.pipe";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { CreateRelationshipDto } from "./dto/create-relationship.dto";
import { session_guard } from "@/middlewares/session-guard";

const router = express.Router();

const module = new RelationshipModule(database);

router.get(
	"/user/:id/following/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.getUserFollowing
);

router.get(
	"/user/:id/followers/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.getUserFollowers
);

router.delete("/unfollow/", session_guard, module.controller.unfollowAccount);

router.get(
	"/user/:id/following/count/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.numUserFollowing
);

router.get(
	"/users/:id/followers/count/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.numUserFollowers
);

router.post(
	"/follow/",
	session_guard,
	parseBodyPipe(CreateRelationshipDto),
	module.controller.followAccount
);

router.get(
	"/:id/counterpart/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.findCounterPart
);

export default router;
