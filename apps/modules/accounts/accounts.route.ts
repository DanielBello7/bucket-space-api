import express from "express";
import { parseBodyPipe } from "@/middlewares/pipes/parse-body-pipe.pipes";
import { uuidParamPipe } from "./pipes/uuid-params.pipe";
import { CreateAccountDto } from "./dto/create-account.dto";
import { AccountModule } from "./accounts.module";
import { database } from "@/datasource";
import { UpdateAccountDto } from "./dto/update-account.dto";

const router = express.Router();
const module = new AccountModule(database);

router.post(
	"/signup/",
	parseBodyPipe(CreateAccountDto),
	module.controller.create
);

router.patch(
	"/:id/",
	uuidParamPipe("id"),
	parseBodyPipe(UpdateAccountDto),
	module.controller.update
);

router.get("/", module.controller.get);

router.get("/:id/", uuidParamPipe("id"), module.controller.find);

router.delete("/:id/", uuidParamPipe("id"), module.controller.remove);

export default router;
