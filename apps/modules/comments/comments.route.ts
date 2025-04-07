import express from "express";
import { database } from "@/datasource";
import { CommentsModule } from "./comments.module";
import { uuidParamPipe } from "../accounts/pipes/uuid-params.pipe";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { session_guard } from "@/middlewares/session-guard";

const router = express.Router();

const module = new CommentsModule(database);

router.get(
	"/post/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.getPostComments
);

router.get(
	"/post/:id/count/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.getPostCommentsCount
);

router.get(
	"/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.findComment
);

router.delete(
	"/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.deleteComment
);

router.post(
	"/",
	session_guard,
	parseBodyPipe(CreateCommentDto),
	module.controller.makeComment
);

export default router;
