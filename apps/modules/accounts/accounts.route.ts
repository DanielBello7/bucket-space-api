import express from "express";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { uuidParamPipe } from "./pipes/uuid-params.pipe";
import { CreateAccountDto } from "./dto/create-account.dto";
import { AccountModule } from "./accounts.module";
import { database } from "@/datasource";
import { UpdateAccountDto } from "./dto/update-account.dto";
import { session_guard } from "@/middlewares/session-guard";

const router = express.Router();
const module = new AccountModule(database);

router.post(
	"/sign_up/",
	parseBodyPipe(CreateAccountDto),
	module.controller.create
);

router.patch(
	"/:id/",
	session_guard,
	uuidParamPipe("id"),
	parseBodyPipe(UpdateAccountDto),
	module.controller.update
);

router.get("/", session_guard, module.controller.get);

router.get("/:id/", session_guard, uuidParamPipe("id"), module.controller.find);

router.delete(
	"/:id/",
	session_guard,
	uuidParamPipe("id"),
	module.controller.remove
);

export default router;
