import express from "express";
import { LikesModule } from "./likes.module";
import { database } from "@/datasource";
import { uuidParamPipe } from "../accounts/pipes/uuid-params.pipe";
import { CreateLikeDto } from "./dto/create-like.dto";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";

const router = express.Router();

const module = new LikesModule(database);

router.get("/post/:id/", uuidParamPipe("id"), module.controller.getPostLikes);

router.get(
	"/post/:id/count/",
	uuidParamPipe("id"),
	module.controller.getPostLikesCount
);

router.post("/", parseBodyPipe(CreateLikeDto), module.controller.likePost);

router.get("/account/:id/", uuidParamPipe("id"), module.controller.getAccLikes);

router.delete("/:id/", uuidParamPipe("id"), module.controller.dislikePost);

export default router;
