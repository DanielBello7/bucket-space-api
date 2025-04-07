import express from "express";
import { PostsModule } from "./posts.module";
import { database } from "@/datasource";
import { uuidParamPipe } from "../accounts/pipes/uuid-params.pipe";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { CreatePostDto } from "./dto/create-post.dto";
import { upload } from "@/config";
import { session_guard } from "@/middlewares/session-guard";

const router = express.Router();

const module = new PostsModule(database);

router.get("/", session_guard, module.controller.getPosts);

router.get(
	"/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.findPost
);

router.post(
	"/",
	session_guard,
	upload.array("files"),
	parseBodyPipe(CreatePostDto),
	module.controller.savePost
);

router.get(
	"/user/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.getUserPosts
);

router.get(
	"/user/:id/count/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.countUserPosts
);

router.delete(
	"/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.removePost
);

export default router;
