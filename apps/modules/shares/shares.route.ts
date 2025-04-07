import express from "express";
import { SharesModule } from "./shares.module";
import { database } from "@/datasource";
import { uuidParamPipe } from "../accounts/pipes/uuid-params.pipe";
import { CreateShareDto } from "./dto/create-share.dto";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { UpdateShareDto } from "./dto/update-share.dto";
import { session_guard } from "@/middlewares/session-guard";

const router = express.Router();

const module = new SharesModule(database);

router.get(
	"/user/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.getUserShares
);

router.get("/", session_guard, module.controller.getShares);

router.delete(
	"/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.unSharePost
);

router.get(
	"/count/user/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.countUserShares
);

router.post(
	"/",
	session_guard,
	parseBodyPipe(CreateShareDto),
	module.controller.sharePost
);

router.get(
	"/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.findShared
);

router.patch(
	"/:id/",
	session_guard,
	uuidParamPipe("id"),
	parseBodyPipe(UpdateShareDto),
	module.controller.updateSharedPost
);

export default router;
