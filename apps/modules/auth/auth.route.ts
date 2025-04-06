import express from "express";
import { AuthModule } from "./auth.module";
import { database } from "@/datasource";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { LoginDto } from "./dto/login-email.dto";
import { RefreshDto } from "./dto/refresh.dto";

const router = express.Router();

const module = new AuthModule(database);

router.post("/sign_in/", parseBodyPipe(LoginDto), module.controller.sign_in);

router.get("/sign_out", module.controller.logout);

router.post("/refresh/", parseBodyPipe(RefreshDto), module.controller.refresh);

router.get("/me", module.controller.me);

export default router;
