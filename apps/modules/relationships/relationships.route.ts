import express from "express";
import { RelationshipModule } from "./relationships.module";
import { database } from "@/datasource";
import { uuidParamPipe } from "../accounts/pipes/uuid-params.pipe";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { CreateRelationshipDto } from "./dto/create-relationship.dto";

const router = express.Router();

const module = new RelationshipModule(database);

router.get(
	"/user/:id/following/",
	uuidParamPipe("id"),
	module.controller.getUserFollowing
);

router.get(
	"/user/:id/followers/",
	uuidParamPipe("id"),
	module.controller.getUserFollowers
);

router.delete("/unfollow/", module.controller.unfollowAccount);

router.get(
	"/user/:id/following/count/",
	uuidParamPipe("id"),
	module.controller.numUserFollowing
);

router.get(
	"/users/:id/followers/count/",
	uuidParamPipe("id"),
	module.controller.numUserFollowers
);

router.post(
	"/follow/",
	parseBodyPipe(CreateRelationshipDto),
	module.controller.followAccount
);

router.get(
	"/:id/counterpart/",
	uuidParamPipe("id"),
	module.controller.findCounterPart
);

export default router;
