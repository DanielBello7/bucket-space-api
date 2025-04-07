import express from "express";
import { AuthModule } from "./auth.module";
import { database } from "@/datasource";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { LoginDto } from "./dto/login-email.dto";
import { RefreshDto } from "./dto/refresh.dto";
import { session_guard } from "@/middlewares/session-guard";

const router = express.Router();

const module = new AuthModule(database);

router.post("/sign_in/", parseBodyPipe(LoginDto), module.controller.sign_in);

router.get("/sign_out", session_guard, module.controller.logout);

router.post(
	"/refresh/",
	session_guard,
	parseBodyPipe(RefreshDto),
	module.controller.refresh
);

router.get("/me", session_guard, module.controller.me);

export default router;
