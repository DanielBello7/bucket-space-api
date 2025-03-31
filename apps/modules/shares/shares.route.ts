import express from "express";
import { SharesModule } from "./shares.module";
import { database } from "@/datasource";
import { uuidParamPipe } from "../accounts/pipes/uuid-params.pipe";
import { CreateShareDto } from "./dto/create-share.dto";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { UpdateShareDto } from "./dto/update-share.dto";

const router = express.Router();

const module = new SharesModule(database);

router.get("/user/:id/", uuidParamPipe("id"), module.controller.getUserShares);

router.get("/", module.controller.getShares);

router.delete("/:id/", uuidParamPipe("id"), module.controller.unSharePost);

router.get(
	"/count/user/:id/",
	uuidParamPipe("id"),
	module.controller.countUserShares
);

router.post("/", parseBodyPipe(CreateShareDto), module.controller.sharePost);

router.get("/:id/", uuidParamPipe("id"), module.controller.findShared);

router.patch(
	"/:id/",
	uuidParamPipe("id"),
	parseBodyPipe(UpdateShareDto),
	module.controller.updateSharedPost
);

export default router;
