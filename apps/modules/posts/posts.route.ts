import express from "express";
import { PostsModule } from "./posts.module";
import { database } from "@/datasource";
import { uuidParamPipe } from "../accounts/pipes/uuid-params.pipe";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { CreatePostDto } from "./dto/create-post.dto";
import { upload } from "@/config";

const router = express.Router();

const module = new PostsModule(database);

router.get("/", module.controller.getPosts);

router.get("/:id/", uuidParamPipe("id"), module.controller.findPost);

router.post(
	"/",
	upload.array("files"),
	parseBodyPipe(CreatePostDto),
	module.controller.savePost
);

router.get("/user/:id/", uuidParamPipe("id"), module.controller.getUserPosts);

router.get(
	"/user/:id/count/",
	uuidParamPipe("id"),
	module.controller.countUserPosts
);

router.delete("/:id/", uuidParamPipe("id"), module.controller.removePost);

export default router;
