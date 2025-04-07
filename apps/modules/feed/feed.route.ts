import { FeedModule } from "./feed.module";
import { database } from "@/datasource";
import { session_guard } from "@/middlewares/session-guard";
import express from "express";

const router = express.Router();

const module = new FeedModule(database);

router.get("/account/", session_guard, module.controller.get_user_feed);

router.get("/guest/", module.controller.get_feed);

export default router;
